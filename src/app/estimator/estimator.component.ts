import {Component, Input} from '@angular/core';
import {Room, ROOM_TYPES} from './room';
import {RemovalItem} from './removal-item';
import {EstimatorDataService} from './estimator-data.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['../styles.css', './estimator.component.css'],
})
export class EstimatorComponent {
  roomTypes = ROOM_TYPES;
  selectRoomPlaceholder = 'Select room type';
  room: Room;

  @Input() componentItems: RemovalItem[];
  private itemsObservable: Observable<RemovalItem[]>;
  private itemsObserver: Subscription;

  rooms: Room[];
  submitRoomErrorMessage: string;

  constructor(private service: EstimatorDataService) {
    this.itemsObservable = this.service.itemsObservable;

    const nextFunc = (items: RemovalItem[]) => {
      this.componentItems = items;
    };
    const errorFunc = (error: Error) => {
      console.log(error.message);
    };
    this.itemsObserver = this.service.itemsObservable.subscribe(nextFunc, errorFunc);

    this.rooms = service.getRooms();
  }

  newRoom(): void {
    this.room = this.service.addRoom();
  }

  onSubmitRoom(): void {
    if (!this.room.type) {
      this.submitRoomErrorMessage = 'Must select room type';
    }
    else if (!this.room.name) {
      this.submitRoomErrorMessage = 'Must use valid room name';
    }
    else {
      this.room = null;
      this.submitRoomErrorMessage = null;
    }
  }
}
