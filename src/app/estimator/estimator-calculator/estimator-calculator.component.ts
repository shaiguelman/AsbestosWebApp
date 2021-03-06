import {Component, Input} from '@angular/core';
import {Room, ROOM_TYPES} from '../util/room';
import {RemovalItem} from '../util/removal-item';
import {Observable, Subscription} from 'rxjs';
import {EstimatorDataService} from '../util/estimator-data.service';

@Component({
  selector: 'app-estimator-calculator',
  templateUrl: './estimator-calculator.component.html',
  styleUrls: ['./estimator-calculator.component.css']
})
export class EstimatorCalculatorComponent{
  roomTypes = ROOM_TYPES;
  selectRoomPlaceholder = 'Select room type';
  selectedRoom: Room;

  @Input() componentItems: RemovalItem[];
  private itemsObservable: Observable<unknown>;
  private itemsObserver: Subscription;

  rooms: Room[];
  submitRoomErrorMessage: string;

  constructor(private service: EstimatorDataService) {
    this.itemsObservable = this.service.itemsObservable;

    const nextFunc = () => {
      this.componentItems = this.selectedRoom ? service.getItems(this.selectedRoom.id) : [];
    };
    const errorFunc = (error: Error) => {
      console.log(error.message);
    };

    this.itemsObserver = this.service.itemsObservable.subscribe(nextFunc, errorFunc);

    this.rooms = service.getRooms();
  }

  newRoom(): void {
    this.selectedRoom = this.service.addRoom();
  }

  onSubmitRoom(): void {
    if (!this.selectedRoom.type) {
      this.submitRoomErrorMessage = 'Must select room type';
    }
    else if (!this.selectedRoom.name) {
      this.submitRoomErrorMessage = 'Must use valid room name';
    }
    else {
      this.selectedRoom = null;
      this.submitRoomErrorMessage = null;
    }
  }

  chooseRoom(room: Room): void {
    if (!this.selectedRoom) {
      this.selectedRoom = room;
      this.componentItems = this.service.getItems(room.id);
    }
  }

  clearItem(item: RemovalItem): void {
    this.service.removeItem(item.id);
  }

  clearData(): void {
    this.service.clearData();
  }
}
