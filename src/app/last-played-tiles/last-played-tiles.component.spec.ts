import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPlayedTilesComponent } from './last-played-tiles.component';

describe('LastPlayedTilesComponent', () => {
  let component: LastPlayedTilesComponent;
  let fixture: ComponentFixture<LastPlayedTilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastPlayedTilesComponent]
    });
    fixture = TestBed.createComponent(LastPlayedTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
