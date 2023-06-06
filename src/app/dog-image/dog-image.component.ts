import { Component, Input } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})
export class DogImageComponent {
  data: any;
  image: any;

  constructor(private _apiservice: FetchService){}

  ngOnInit() {
    this._apiservice.getData().subscribe(res => {
      this.data = res;
      this.image = this.data.url
    })
  }
  
  callFunction() {
    this._apiservice.getData().subscribe(res => {
      this.data = res;
      this.image = this.data.url
    })
  }
}
