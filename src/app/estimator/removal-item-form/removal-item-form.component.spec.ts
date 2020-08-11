import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovalItemFormComponent } from './removal-item-form.component';

describe('RemovalItemFormComponent', () => {
  let component: RemovalItemFormComponent;
  let fixture: ComponentFixture<RemovalItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovalItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovalItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
