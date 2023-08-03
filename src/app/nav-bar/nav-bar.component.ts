import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() username:string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url)
  }
  isHomePage() {
    return false;
  };
}
