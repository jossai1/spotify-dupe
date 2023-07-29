import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-media-category',
  templateUrl: './media-category.component.html',
  styleUrls: ['./media-category.component.css']
})
export class MediaCategoryComponent {
  @Input() mediaCategory: any;
}
