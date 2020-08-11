import {Component, Input} from '@angular/core';
import {ROOM_TYPES} from './room';
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
  selectedRoomType = '';

  @Input() componentItems: RemovalItem[];
  private itemsObservable: Observable<RemovalItem[]>;
  private itemsObserver: Subscription;

  constructor(private service: EstimatorDataService) {
    this.itemsObservable = this.service.itemsObservable;

    this.itemsObserver = this.service.itemsObservable.subscribe(this.observerFunc);
  }

  observerFunc = (items: RemovalItem[]) => {
    this.componentItems = items;
  }
}
