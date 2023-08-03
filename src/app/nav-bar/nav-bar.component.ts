import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router, private location: Location, private sharedService: SharedService) {}

  username:string = this.sharedService.getUsername();

  isHomePage() {
    return this.router.url === '/';
  }

  goForward() {
    this.location.forward();
  }

  goBack() {
    //prevent going back on home page - nowhere to go
    if (!this.isHomePage()) {
      this.location.back();
    }
  }
}
