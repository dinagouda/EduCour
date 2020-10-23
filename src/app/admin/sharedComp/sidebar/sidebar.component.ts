import { Component, OnInit } from '@angular/core';
import {  HostListener, ElementRef } from '@angular/core';



export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
  
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',   title: 'Home',         icon:'nc-bank',       class: '' },
    { path: '/students',       title: 'Students',             icon:'nc-diamond',    class: '' },
    { path: '/maps',        title: 'Teachers',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications',  title: 'Teacher Requests',     icon:'nc-bell-55',    class: ''},
    { path: '/user',       title: 'Subject',      icon:'nc-single-02',  class: ''  },
    { path: '/profile',       title: 'Academic',      icon:'nc-single-02',  class: ''},
    { path: '/Profilecolleage',       title: 'Colleage',      icon:'nc-single-02',  class: ''},
    


    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        
    }
    
}


