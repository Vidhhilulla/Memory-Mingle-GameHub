import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutConfirmationComponent } from './log-out-confirmation.component';

describe('LogOutConfirmationComponent', () => {
  let component: LogOutConfirmationComponent;
  let fixture: ComponentFixture<LogOutConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogOutConfirmationComponent]
    });
    fixture = TestBed.createComponent(LogOutConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
