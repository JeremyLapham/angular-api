import { Component,Input } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  data: any;
  answerUrl: any;
  answerTxt: any;

  constructor(private _apiservice: FetchService) {}

  ngOnInit() {
    this._apiservice.getAnswer().subscribe(res => {
      this.data = res;
      this.answerUrl = this.data.image;
      this.answerTxt = this.data.answer;
    })
  }

  callAnswer() {
    this._apiservice.getAnswer().subscribe(res => {
      this.data = res;
      this.answerUrl = this.data.image;
      this.answerTxt = this.data.answer;
    })
  }

}
