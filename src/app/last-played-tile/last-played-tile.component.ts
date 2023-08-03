import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-last-played-tile',
  templateUrl: './last-played-tile.component.html',
  styleUrls: ['./last-played-tile.component.css']
})
export class LastPlayedTileComponent {
  @Input() lastPlayed: any;
  @Output() lastPlayedClicked = new EventEmitter<any>();

  constructor(private router: Router) {}

  buttonClasses: string[] = ['hide-play-button'];

  hidePlayButton() {
    this.buttonClasses = ['hide-play-button']
  }

  pausePlayToggle() {
    // emit event to parent with the media that has just been clicked
    this.lastPlayedClicked.emit(this.lastPlayed);
  }

  showPlayButton() {
    this.buttonClasses = ['show-play-button'];
  }

  // todo move to parent and use in media tile and here - as a output
  navigate() {
    this.router.navigateByUrl(`/${this.lastPlayed.type}/${this.lastPlayed.id}`, { state: this.lastPlayed });
  }
}
