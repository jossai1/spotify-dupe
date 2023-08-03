import {Component} from '@angular/core';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private sharedService: SharedService) {}

  lastPlayedMedia: any[] = this.sharedService.getLastPlayedData();

  mediaCategories: any[] = this.sharedService.getMediaCategories();

  timeOfDay(): string {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return 'Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  }
}
