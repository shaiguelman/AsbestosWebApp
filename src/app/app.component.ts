import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css']
})
export class AppComponent implements OnInit{

  public constructor(private titleService: Title) {}

  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.setTitle('Asbestos App');
  }
}
