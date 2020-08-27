import {Component} from '@angular/core';
import {EstimatorDataService} from '../service/estimator-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent{

  price = this.service.getTotPrice();

  constructor(private service: EstimatorDataService) { }
}
