import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { QuestionComponent } from './question.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyAdsenseModule } from '../shared/component/my-adsense/my-adsense.module';
import { ShareModule } from '../shared/component/share/share.module';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MyAdsenseModule,
    ShareModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  exports: [
    QuestionComponent
  ]
})
export class QuestionModule { }
