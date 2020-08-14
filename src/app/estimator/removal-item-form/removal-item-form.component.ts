import { Component} from '@angular/core';
import {RemovalItem, REMOVAL_ITEM_TYPES} from '../removal-item';
import {EstimatorDataService} from '../estimator-data.service';

@Component({
  selector: 'app-removal-item-form',
  templateUrl: './removal-item-form.component.html',
  styleUrls: ['./removal-item-form.component.css', '../../styles.css']
})
export class RemovalItemFormComponent{

  removalItemTypes = REMOVAL_ITEM_TYPES;

  removalItem = new RemovalItem();
  errorMessage: string;

  constructor(private service: EstimatorDataService) { }

  onSubmitItem(): void {
    if (!this.removalItem.type) {
      this.errorMessage = 'Must select item type';
    }
    else if (!this.removalItem.quantity) {
      this.errorMessage = 'Item quantity must be more than 0';
    }
    else {
      this.errorMessage = '';
      this.service.addItem(this.removalItem);
      this.removalItem = new RemovalItem();
    }
  }
}
