import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTimeLeftComponent } from './no-time-left.component';

describe('NoTimeLeftComponent', () => {
  let component: NoTimeLeftComponent;
  let fixture: ComponentFixture<NoTimeLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoTimeLeftComponent]
    });
    fixture = TestBed.createComponent(NoTimeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
