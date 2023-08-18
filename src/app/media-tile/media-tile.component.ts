import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {MediaTile} from "../models/media-tile.model";

@Component({
  selector: 'app-media-tile',
  templateUrl: './media-tile.component.html',
  styleUrls: ['./media-tile.component.css']
})
export class MediaTileComponent {

  constructor(private router: Router) {
    // this.route.params.subscribe( params => console.log(params) );
  }

  @Input() mediaTileData: any;

  buttonClasses: string[] = ['hide-play-button'];

  hidePlayButton() {
    this.buttonClasses= ['hide-play-button']
  }

  showPlayButton() {
    this.buttonClasses = ['show-play-button'];
  }

  // todo move to parent and use in last played tile and here - as a output
  navigate() {
    this.router.navigateByUrl(`/${this.mediaTileData.type.toLowerCase()}/${this.mediaTileData.id}`, { state: this.mediaTileData });
  }
}
