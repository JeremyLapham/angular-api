import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input() setUp ='';
  @Input() delivery ='';
  @Input() joke ='' || null;
  @Input() category ='';
}
