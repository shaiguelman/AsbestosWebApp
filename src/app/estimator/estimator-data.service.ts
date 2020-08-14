import { Injectable } from '@angular/core';
import {RemovalItem} from './removal-item';
import {BehaviorSubject, Observable} from 'rxjs';
import {Room} from './room';

@Injectable({
  providedIn: 'root'
})
export class EstimatorDataService {
  get itemsObservable(): Observable<RemovalItem[]> {
    return this._itemsObservable.asObservable();
  }

  private numItems = 0;
  private _items: RemovalItem[] = [];

  private numRooms = 0;
  private _rooms: Room[] = [];
  private _currentRoomId: number;
  private _curRoomItems = [];

  private _itemsObservable = new BehaviorSubject(this._curRoomItems);

  constructor() { }

  addItem(item: RemovalItem): void {
    item.id = ++this.numItems;
    item.roomId = this._currentRoomId;
    this._items.push(item);
    this._curRoomItems.push(item);
    this._itemsObservable.next(this._curRoomItems);
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
    this._currentRoomId = room.id;
    console.log(`Submitted Room ${room.id} of type ${room.type}`);
    this._curRoomItems = this.getItems(room.id);
    this._itemsObservable.next(this._curRoomItems);
    return room;
  }
}
