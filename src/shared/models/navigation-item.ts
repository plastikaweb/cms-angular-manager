export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'group' | 'collapse';
  icon?: string;
  children?: Array<NavigationItem>;
  route?: Array<string>;
  routerLinkActiveOptions?: { exact: boolean };
}
