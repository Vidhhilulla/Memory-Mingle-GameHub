import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidGuardianComponent } from './invalid-guardian.component';

describe('InvalidGuardianComponent', () => {
  let component: InvalidGuardianComponent;
  let fixture: ComponentFixture<InvalidGuardianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidGuardianComponent]
    });
    fixture = TestBed.createComponent(InvalidGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
