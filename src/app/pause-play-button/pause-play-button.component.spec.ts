import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PausePlayButtonComponent } from './pause-play-button.component';

describe('PausePlayButtonComponent', () => {
  let component: PausePlayButtonComponent;
  let fixture: ComponentFixture<PausePlayButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PausePlayButtonComponent]
    });
    fixture = TestBed.createComponent(PausePlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
