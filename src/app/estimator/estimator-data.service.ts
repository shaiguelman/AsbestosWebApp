import { Injectable } from '@angular/core';
import {RemovalItem} from './removal-item';
import {Observable, Subject} from 'rxjs';
import {Room} from './room';

@Injectable({
  providedIn: 'root'
})
export class EstimatorDataService {
  get itemsObservable(): Observable<unknown> {
    return this._itemsObservable.asObservable();
  }
  private numItems = 0;
  private _items: RemovalItem[] = [];

  private numRooms = 0;
  private _rooms: Room[] = [];

  private _itemsObservable = new Subject();

  constructor() { }

  addItem(item: RemovalItem): void {
    item.id = ++this.numItems;
    this._items.push(item);
    this._itemsObservable.next();
    console.log(`Submitted Item ${item.id} to ${item.roomId} of type ${item.type}: ${item.quantity} ft squared`);
  }

  getItem(id: number): RemovalItem {
    return this._items.find(item => item.id === id);
  }

  getItems(roomId?: number): RemovalItem[] {
    return roomId ? this._items.filter(item => item.roomId === roomId) : [...this._items];
  }

  getRooms(): Room[] {
    return this._rooms;
  }

  getRoom(id: number): Room {
    return this._rooms.find(room => room.id === id);
  }

  addRoom(room?: Room): Room {
    room = room ?? new Room(++this.numRooms);
    this._rooms.push(room);
    this._itemsObservable.next();
    return room;
  }

  calculate(): number {
    return 1000;
  }
}
