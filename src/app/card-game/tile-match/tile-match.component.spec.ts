import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileMatchComponent } from './tile-match.component';

describe('TileMatchComponent', () => {
  let component: TileMatchComponent;
  let fixture: ComponentFixture<TileMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TileMatchComponent]
    });
    fixture = TestBed.createComponent(TileMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
