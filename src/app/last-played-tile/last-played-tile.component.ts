import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-last-played-tile',
  templateUrl: './last-played-tile.component.html',
  styleUrls: ['./last-played-tile.component.css']
})
export class LastPlayedTileComponent {

  @Input() lastPlayed: any;
  buttonClasses: string[] = ['last-played-tile__play-button'];

  hidePlayButton() {
    if (!this.lastPlayed.playing) {
      this.buttonClasses = this.buttonClasses.filter(className => className === 'last-played-tile__play-button');
    }
  }

  showPlayButton() {

    this.buttonClasses = [...['show-play-button'], ...this.buttonClasses];
  }
}
