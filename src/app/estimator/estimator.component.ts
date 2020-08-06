import { Component, OnInit } from '@angular/core';
import {ROOM_TYPES} from './room';
import {REMOVAL_ITEM_TYPES} from './removal-item';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['../styles.css', './estimator.component.css']
})
export class EstimatorComponent implements OnInit {
  roomTypes = ROOM_TYPES;
  selectRoomPlaceholder = 'Select room type';
  selectedRoomType = '';

  removalItemTypes = REMOVAL_ITEM_TYPES;
  selectedItemType = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onRoomSelect(roomType: string): void {
    if (roomType === this.selectRoomPlaceholder) {
      roomType = '';
    }
    this.selectedRoomType = roomType;
  }
}
