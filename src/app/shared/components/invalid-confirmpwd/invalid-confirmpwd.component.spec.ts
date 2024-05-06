import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidConfirmpwdComponent } from './invalid-confirmpwd.component';

describe('InvalidConfirmpwdComponent', () => {
  let component: InvalidConfirmpwdComponent;
  let fixture: ComponentFixture<InvalidConfirmpwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidConfirmpwdComponent]
    });
    fixture = TestBed.createComponent(InvalidConfirmpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
