import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DogImageComponent } from './dog-image/dog-image.component';
import { JokeComponent } from './joke/joke.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    DogImageComponent,
    JokeComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'app-joke', component: JokeComponent},
      {path: 'app-dog-image', component: DogImageComponent},
      {path: 'app-answer', component: AnswerComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
