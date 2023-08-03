import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-media-page',
  templateUrl: './media-page.component.html',
  styleUrls: ['./media-page.component.css']
})
export class MediaPageComponent {
  media: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    // console.log(this.router.getCurrentNavigation()?.extras.state);
    this.media = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.media)
    // this.route.params.subscribe( params => console.log(params) );
  }

}
