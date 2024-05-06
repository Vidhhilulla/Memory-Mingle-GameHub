import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidRegistrationComponent } from './invalid-registration.component';

describe('InvalidRegistrationComponent', () => {
  let component: InvalidRegistrationComponent;
  let fixture: ComponentFixture<InvalidRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidRegistrationComponent]
    });
    fixture = TestBed.createComponent(InvalidRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
