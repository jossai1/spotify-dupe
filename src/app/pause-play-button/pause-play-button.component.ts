import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pause-play-button',
  templateUrl: './pause-play-button.component.html',
  styleUrls: ['./pause-play-button.component.css']
})
export class PausePlayButtonComponent {

  @Input() playing: boolean = false;
}
