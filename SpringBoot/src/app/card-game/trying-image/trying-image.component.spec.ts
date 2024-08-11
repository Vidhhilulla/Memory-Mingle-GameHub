import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryingImageComponent } from './trying-image.component';

describe('TryingImageComponent', () => {
  let component: TryingImageComponent;
  let fixture: ComponentFixture<TryingImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryingImageComponent]
    });
    fixture = TestBed.createComponent(TryingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
