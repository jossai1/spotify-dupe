import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-media-tile',
  templateUrl: './media-tile.component.html',
  styleUrls: ['./media-tile.component.css']
})
export class MediaTileComponent {

  @Input() mediaTileData: any;

  buttonClasses: string[] = ['hide-play-button'];

  hidePlayButton() {
    this.buttonClasses= ['hide-play-button']
  }

  showPlayButton() {
    this.buttonClasses = ['show-play-button'];
  }
}
