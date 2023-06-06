import { Component, Input } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  data: any;
  setUp: any;
  delivery: any;
  joke: any;
  category: any;


  constructor(private _apiservice: FetchService) {}

  ngOnInit() {
    this._apiservice.getJoke().subscribe(res => {
      this.data = res;
      this.setUp = this.data.setup
      this.delivery = this.data.delivery
      this.joke = this.data.joke
      this.category = this.data.category
    })
  }
  
  callJoke() {
    this._apiservice.getJoke().subscribe(res => {
      this.data = res;
      this.setUp = this.data.setup
      this.delivery = this.data.delivery
      this.joke = this.data.joke
      this.category = this.data.category
    })
  }


}
