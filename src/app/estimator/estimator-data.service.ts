import { Injectable } from '@angular/core';
import {REMOVAL_ITEM_PRICES, RemovalItem} from './removal-item';
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

  getTotPrice(): number {
    const COST_OF_AIR_SCRUBBER = 100;
    const ROOMS_PER_AIR_SCRUBBER = 3.0;
    const DISPOSAL = 500;
    const VARIABLE_COSTS = .075;
    const MINIMUM_COST = 1500;

    const itemsPrice = this._items
      .map(item => REMOVAL_ITEM_PRICES.get(item.type) * item.quantity)
      .reduce((sum, cur) => sum + cur, 0);

    const costOfJob = Math.round((1 + VARIABLE_COSTS) * itemsPrice
      + (COST_OF_AIR_SCRUBBER
        * Math.ceil(this._rooms.length / ROOMS_PER_AIR_SCRUBBER))
      + DISPOSAL);

    return Math.max(costOfJob , MINIMUM_COST + costOfJob * .1);
  }
}
