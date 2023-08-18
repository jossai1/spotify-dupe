import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MediaTileType} from "../models/media-type.types";
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-media-page',
  templateUrl: './media-page.component.html',
  styleUrls: ['./media-page.component.css']
})
export class MediaPageComponent implements OnInit{
  media: any;
  playlistType : MediaTileType = MediaTileType.PLAYLIST;
  showType : MediaTileType = MediaTileType.SHOW;
  albumType : MediaTileType = MediaTileType.ALBUM;
  cocktail: any;
  constructor(private route: ActivatedRoute, private router: Router, private sharedService: SharedService) {
    // console.log(this.router.getCurrentNavigation()?.extras.state);
    this.media = this.router.getCurrentNavigation()?.extras.state;
    // this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit() {
    this.sharedService.getRandomCocktail().subscribe({
      next: (data) => this.cocktail = data,
      error: (error) => console.error(error)
    });
  }

}
