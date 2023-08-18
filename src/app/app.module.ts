import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { MediaTileComponent } from './media-tile/media-tile.component';
import { LastPlayedTileComponent } from './last-played-tile/last-played-tile.component';
import { MediaCategoryComponent } from './media-category/media-category.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LastPlayedTilesComponent } from './last-played-tiles/last-played-tiles.component';
import {CommonModule} from "@angular/common";
import { PausePlayButtonComponent } from './pause-play-button/pause-play-button.component';
import { MediaPageComponent } from './media-page/media-page.component';
import {SharedService} from "./services/shared.service";
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MediaPlayerComponent,
    MediaTileComponent,
    LastPlayedTileComponent,
    MediaCategoryComponent,
    NavBarComponent,
    LastPlayedTilesComponent,
    PausePlayButtonComponent,
    MediaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
