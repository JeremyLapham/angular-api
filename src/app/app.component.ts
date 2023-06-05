import { Component } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  data: any;
  image: any;
  data2: any;
  setup: any;
  delivery: any;
  joke: any;
  category: any;
  data3: any;
  answerUrl: any;
  answerTxt: any;

  constructor(private _apiservice: FetchService) {}

  ngOnInit() {
    this._apiservice.getData().subscribe(res => {
      this.data = res;
      this.image = this.data.url
    })
    this._apiservice.getJoke().subscribe(res => {
      this.data2 = res;
      this.setup = this.data2.setup
      this.delivery = this.data2.delivery
      this.joke = this.data2.joke
      this.category = this.data2.category
    })
    this._apiservice.getAnswer().subscribe(res=> {
      this.data3 = res;
      this.answerUrl = this.data3.image;
      this.answerTxt = this.data3.answer;
    })
  }

  callFunction() {
    this._apiservice.getData().subscribe(res => {
      this.data = res;
      this.image = this.data.url
    })
  }
  
  callJoke() {
    this._apiservice.getJoke().subscribe(res => {
      this.data2 = res;
      this.setup = this.data2.setup
      this.delivery = this.data2.delivery
      this.joke = this.data2.joke
      this.category = this.data2.category
    })
  }

  callAnswer() {
    this._apiservice.getAnswer().subscribe(res=> {
      this.data3 = res;
      this.answerUrl = this.data3.image;
      this.answerTxt = this.data3.answer;
    })
  }
}
