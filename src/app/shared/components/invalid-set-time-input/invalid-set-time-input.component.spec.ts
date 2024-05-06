import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidSetTimeInputComponent } from './invalid-set-time-input.component';

describe('InvalidSetTimeInputComponent', () => {
  let component: InvalidSetTimeInputComponent;
  let fixture: ComponentFixture<InvalidSetTimeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidSetTimeInputComponent]
    });
    fixture = TestBed.createComponent(InvalidSetTimeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
