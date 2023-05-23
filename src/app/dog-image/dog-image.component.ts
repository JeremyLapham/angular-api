import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})
export class DogImageComponent {
  @Input() imageUrl = '';
}
