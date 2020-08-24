import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Input() price: number;
  @Input() showingResult: {show: boolean};

  constructor() { }

  goBack(): void {
    this.showingResult.show = false;
  }
}
