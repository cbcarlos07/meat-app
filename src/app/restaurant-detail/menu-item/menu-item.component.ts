import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.mode';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styles: []
})
export class MenuItemComponent implements OnInit {

  @Input()  menuItem: MenuItem
  @Output() add = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  emitAddEvent(){
    this.add.emit( this.menuItem )
  }

}
