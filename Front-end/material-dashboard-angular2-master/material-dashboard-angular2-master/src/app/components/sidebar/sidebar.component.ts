import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Condomínio',
    children: [{name: 'Condomínio'}, {name: 'Bloco'}, {name: 'Morador'}],
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/residentes/list', title: 'Moradores',  icon: 'groups2', class: '' },
    // { path: '/user-profile', title: 'Cadastro de visitantes',  icon:'person', class: '' },
    { path: '/table-list', title: 'Visitantes',  icon:'content_paste', class: '' },
    { path: '/porteiros/list', title: 'Porteiros', icon:'badge', class: ''},
    { path: '/visitas/list', title: 'Visitas', icon:'emoji_people', class: ''},
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.dataSource.data = TREE_DATA;
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
