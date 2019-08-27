import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartModule } from './start/start.module';
import { QuestionModule } from './question/question.module';
import { MyAdsenseModule } from './shared/component/my-adsense/my-adsense.module';
import { QuestionService } from './shared/service/question';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartModule,
    QuestionModule,
    MyAdsenseModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
