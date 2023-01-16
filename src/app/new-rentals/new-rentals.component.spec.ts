import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRentalsComponent } from './new-rentals.component';

describe('NewRentalsComponent', () => {
  let component: NewRentalsComponent;
  let fixture: ComponentFixture<NewRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRentalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
