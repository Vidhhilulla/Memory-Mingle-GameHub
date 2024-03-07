import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitModalComponent } from './quit-modal.component';

describe('QuitModalComponent', () => {
  let component: QuitModalComponent;
  let fixture: ComponentFixture<QuitModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuitModalComponent]
    });
    fixture = TestBed.createComponent(QuitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
