import {
    AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit,
    Output, ViewChild
} from '@angular/core';
import { ButtonsGroupConfig, CustomTreeMove, TreeListFilter } from '@shared/models';
import { StringUtils } from '@shared/utils';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { ITreeOptions, TreeComponent, TreeModel, TreeNode } from 'angular-tree-component';
import { cloneDeep } from 'lodash';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-tree',
  templateUrl: './custom-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTreeComponent implements OnInit, AfterViewInit, OnDestroy {
  internalOptions: ITreeOptions = {
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    actionMapping: {
      mouse: {
        drop: (
          tree: TreeModel,
          node: TreeNode,
          $event: any,
          { from, to }: { from: any; to: any }
        ) => {
          const { data: currentNodeData, index: currentPosition } = from;
          const { data: parentNodeData } = node;
          const { index } = to;
          const { nodes } = tree;
          const newPosition = currentPosition < index ? index - 1 : index;
          this.onMoveNode({
            tree: cloneDeep(nodes),
            parent: cloneDeep(parentNodeData),
            node: {
              ...currentNodeData,
              currentPosition,
              hasParent: !!node.parent,
              newPosition,
            },
          });
        },
      },
    },
  };

  @Input() nodes: Array<TreeNode> = [];
  @Input() newFields: Array<FormlyFieldConfig> = [];
  @Input() editFields: Array<FormlyFieldConfig> = [];
  @Input() buttonsConfig: ButtonsGroupConfig;
  @Input() lastNode$: Observable<any> = of(null);
  @Input() set options(extraOptions: ITreeOptions) {
    this.internalOptions = {
      ...this.internalOptions,
      ...extraOptions,
    };
  }
  @Input() isTreeCollapsed$: Observable<boolean> = of(true);
  @Input() filterValue$: Observable<any> = of({ name: '', pending: false });
  @Output() emitNodesOrder: EventEmitter<
    CustomTreeMove<unknown>
  > = new EventEmitter();
  @Output() emitNewNode: EventEmitter<any> = new EventEmitter();
  @Output() emitEditNode: EventEmitter<any> = new EventEmitter();
  @Output() emitEditTag: EventEmitter<number> = new EventEmitter();
  @Output() emitNewTag: EventEmitter<number> = new EventEmitter();
  @ViewChild(TreeComponent, { static: false }) public tree: TreeComponent;
  subscriptions: Subscription = new Subscription();

  ngOnInit() {
    const lastNodeSubscription = this.lastNode$.subscribe(node => {
      if (node && node.parentId && this.tree) {
        this.tree.treeModel.getNodeById(node.parentId).expand();
      }
    });
    this.subscriptions.add(lastNodeSubscription);
  }

  ngAfterViewInit() {
    const isTreeCollapsedSubscription = this.isTreeCollapsed$.subscribe(
      collapsed =>
        collapsed
          ? this.tree.treeModel.collapseAll()
          : this.tree.treeModel.expandAll()
    );
    this.subscriptions.add(isTreeCollapsedSubscription);

    const filterValueSubscription = this.filterValue$.subscribe(filters =>
      this.doFilter(filters)
    );
    this.subscriptions.add(filterValueSubscription);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  doFilter(filterList: Array<TreeListFilter>) {
    this.tree.treeModel.filterNodes((node: TreeNode) =>
      this.searchMatch(filterList, node.data)
    );
  }

  onMoveNode(data: CustomTreeMove<unknown>) {
    this.emitNodesOrder.emit(data);
  }

  editNode(data: any) {
    this.emitEditNode.emit(data);
  }

  addNewNode(data: any) {
    this.emitNewNode.emit(data);
  }

  editTag(data: number) {
    this.emitEditTag.emit(data);
  }

  newTag(data: number) {
    this.emitNewTag.emit(data);
  }

  searchMatch(filterList: Array<TreeListFilter>, node: any) {
    let output = true;
    filterList.map(filter => {
      const { field, value, inputType } = filter;
      if (!output) {
        return false;
      }
      if (inputType === 'text') {
        output = StringUtils.matchString(value as string, node[field]);
      }
      if (inputType === 'boolean') {
        output = filter.evaluate(value as boolean, node);
      }
    });
    return output;
  }
}
