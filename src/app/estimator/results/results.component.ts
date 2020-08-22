import {Component, Input, Output} from '@angular/core';
import {EstimatorDataService} from '../estimator-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Input() price: number;
  @Output() showingResult = true;
  observer = this.service.itemsObservable.subscribe(() => {
    this.price = this.service.getTotPrice();
  });

  constructor(private service: EstimatorDataService) { }

  goBack(): void {
    this.showingResult = false;
  }
}
