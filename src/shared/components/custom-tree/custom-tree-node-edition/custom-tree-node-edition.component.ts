import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonsGroupConfig } from '@shared/models';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { TreeNode } from 'angular-tree-component';

@Component({
  selector: 'app-custom-tree-node-edition',
  templateUrl: './custom-tree-node-edition.component.html',
  styleUrls: ['./custom-tree-node-edition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTreeNodeEditionComponent {
  @Input() node: Partial<TreeNode>;
  @Input() editModel = {};
  @Input() newFields: Array<FormlyFieldConfig>;
  @Input() editFields: Array<FormlyFieldConfig>;
  @Input() buttonsConfig: ButtonsGroupConfig;
  @Input() createAlwaysVisible = false;
  @Output() emitNewNode: EventEmitter<any> = new EventEmitter();
  @Output() emitEditNode: EventEmitter<any> = new EventEmitter();
  @Output() emitEditTag: EventEmitter<number> = new EventEmitter();
  @Output() emitNewtTag: EventEmitter<number> = new EventEmitter();

  newModel = {};

  editionVisible = false;
  editionNewVisible = false;

  toggleEditVisibility() {
    this.editionVisible = !this.editionVisible;
    this.editionNewVisible = false;
  }

  toggleNewVisibility() {
    this.editionNewVisible = !this.editionNewVisible;
    this.editionVisible = false;
  }

  submitNew(model) {
    this.emitNewNode.emit({
      parentId: this.node && this.node.data ? this.node.data.id : null,
      name: model && model.name,
    });
    this.toggleNewVisibility();
  }

  submitEdit(model) {
    this.emitEditNode.emit({
      ...this.node.data,
      name: model && model.name,
    });
    this.toggleEditVisibility();
  }

  goToEditOrNewTag(edition: boolean) {
    if (edition) {
      this.emitEditTag.emit(
        this.node && this.node.data ? this.node.data.tagId : null
      );
    } else {
      this.emitNewtTag.emit(
        this.node && this.node.data ? this.node.data.id : null
      );
    }
  }
}
