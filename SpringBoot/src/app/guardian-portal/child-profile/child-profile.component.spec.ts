import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfileComponent } from './child-profile.component';

describe('ChildProfileComponent', () => {
  let component: ChildProfileComponent;
  let fixture: ComponentFixture<ChildProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildProfileComponent]
    });
    fixture = TestBed.createComponent(ChildProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
