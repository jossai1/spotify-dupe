import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPlayedTileComponent } from './last-played-tile.component';

describe('LastPlayedTileComponent', () => {
  let component: LastPlayedTileComponent;
  let fixture: ComponentFixture<LastPlayedTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastPlayedTileComponent]
    });
    fixture = TestBed.createComponent(LastPlayedTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
