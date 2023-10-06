import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarCalculatorComponent } from './solar-calculator.component';

describe('SolarCalculatorComponent', () => {
  let component: SolarCalculatorComponent;
  let fixture: ComponentFixture<SolarCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarCalculatorComponent]
    });
    fixture = TestBed.createComponent(SolarCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
