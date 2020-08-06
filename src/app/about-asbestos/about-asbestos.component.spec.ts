import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAsbestosComponent } from './about-asbestos.component';

describe('AboutAsbestosComponent', () => {
  let component: AboutAsbestosComponent;
  let fixture: ComponentFixture<AboutAsbestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAsbestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAsbestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
