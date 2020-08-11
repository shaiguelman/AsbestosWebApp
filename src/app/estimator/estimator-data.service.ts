import { Injectable } from '@angular/core';
import {RemovalItem} from './removal-item';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstimatorDataService {
  get itemsObservable(): Observable<RemovalItem[]> {
    return this._itemsObservable.asObservable();
  }

  private numItems = 0;
  private items: RemovalItem[] = [];
  private itemsMap: Map<number, RemovalItem> = new Map();

  private _itemsObservable = new BehaviorSubject(this.items);

  constructor() { }

  addItem(item: RemovalItem): void {
    console.log(`Submitted Item ${item.id} of type ${item.type}: ${item.quantity} ft squared`);
    item.id = ++this.numItems;
    this.itemsMap[item.id] = item;
    this.items.push(item);
    this._itemsObservable.next(this.items);
  }

  getItem(id: number): RemovalItem {
    return this.itemsMap[id];
  }

  private getItems(): RemovalItem[] {
    return Array.from(this.itemsMap.values());
  }
}
