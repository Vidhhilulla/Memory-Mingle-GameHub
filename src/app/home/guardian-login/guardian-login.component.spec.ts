import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianLoginComponent } from './guardian-login.component';

describe('GuardianLoginComponent', () => {
  let component: GuardianLoginComponent;
  let fixture: ComponentFixture<GuardianLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardianLoginComponent]
    });
    fixture = TestBed.createComponent(GuardianLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
