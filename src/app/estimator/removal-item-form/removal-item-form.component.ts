import { Component} from '@angular/core';
import {RemovalItem, REMOVAL_ITEM_TYPES} from '../removal-item';
import {EstimatorDataService} from '../estimator-data.service';

@Component({
  selector: 'app-removal-item-form',
  templateUrl: './removal-item-form.component.html',
  styleUrls: ['./removal-item-form.component.css']
})
export class RemovalItemFormComponent{

  removalItemTypes = REMOVAL_ITEM_TYPES;

  removalItem = new RemovalItem(0,
    '',
    0,
    1);

  constructor(private service: EstimatorDataService) { }

  onItemSelect(itemType: string): void {
    this.removalItem.type = itemType;
  }

  onSubmitItem(): void {
    this.service.addItem(this.removalItem);
  }
}
