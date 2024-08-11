import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesOutModalComponent } from './moves-out-modal.component';

describe('MovesOutModalComponent', () => {
  let component: MovesOutModalComponent;
  let fixture: ComponentFixture<MovesOutModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovesOutModalComponent]
    });
    fixture = TestBed.createComponent(MovesOutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
