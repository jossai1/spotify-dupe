import {AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren} from '@angular/core';
import {LastPlayedTileComponent} from "../last-played-tile/last-played-tile.component";
import {LastPlayed} from "../models/last-played.model";

@Component({
  selector: 'app-last-played-tiles',
  templateUrl: './last-played-tiles.component.html',
  styleUrls: ['./last-played-tiles.component.css']
})
export class LastPlayedTilesComponent implements AfterViewInit{
  //passed in as prop
  @Input() lastPlayedMedia: LastPlayed[]  = [];

  @ViewChildren(LastPlayedTileComponent) lastPlayedTilesComponent: QueryList<LastPlayedTileComponent> = new QueryList<LastPlayedTileComponent>();
  // @ViewChildren(LastPlayedTileComponent) public lastPlayedTilesComponentRefs: ElementRef<LastPlayedTileComponent>;
  // @ViewChildren('childRef') childComponents: QueryList<LastPlayedTileComponent>;

  // play one song from list..only one song can play at a time
  playOneMediaFromListOfLastPlayed(mediaToPlay: LastPlayed) {
    // toggle the state of the selected media
    mediaToPlay.playing ? mediaToPlay.playing  = false : mediaToPlay.playing = true;

    // go through all lastplayed tiles
    this.lastPlayedTilesComponent.forEach(component => {
      // don't touch the current tile as we've already set it above
      if (component.lastPlayed.name !== mediaToPlay.name) {
        // set all other songs to not playing = so it won't show
        component.lastPlayed.playing = false;
        // component.buttonClasses = ['hide-play-button'];
      }
    });

    // alert('now playing: ' + mediaToPlay.name)
  }

  ngAfterViewInit(): void {
    // Access child component's properties and methods
    if (this.lastPlayedTilesComponent) {
      this.lastPlayedTilesComponent.forEach((childComponent: LastPlayedTileComponent) => {
        // Access child component's properties and methods
        // console.log(childComponent.lastPlayed);
      });
    }

  }

}
