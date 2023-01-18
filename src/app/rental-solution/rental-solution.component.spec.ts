import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalSolutionComponent } from './rental-solution.component';

describe('RentalSolutionComponent', () => {
  let component: RentalSolutionComponent;
  let fixture: ComponentFixture<RentalSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
