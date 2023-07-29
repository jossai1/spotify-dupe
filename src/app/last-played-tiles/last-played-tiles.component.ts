import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-last-played-tiles',
  templateUrl: './last-played-tiles.component.html',
  styleUrls: ['./last-played-tiles.component.css']
})
export class LastPlayedTilesComponent {

  //passed in as prop
  @Input() lastPlayedMedia: any[]  = [];
}
