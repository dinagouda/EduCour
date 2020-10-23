import { Injectable } from '@angular/core';
import { IItem } from '../interfaces/IItem';


@Injectable({
  providedIn: 'root'
})
export class StudentdetailsService {
  private _items:IItem[] = [];
  
  
 
  addItem(item: IItem) {
      this._items.push(item);
  }

  getItems(): IItem[] {
      return this._items;
  }


   
  constructor() { }
}
