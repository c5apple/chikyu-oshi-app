import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsenseModule } from 'ng2-adsense';
import { MyAdsenseComponent } from './my-adsense.component';

@NgModule({
  declarations: [MyAdsenseComponent],
  imports: [
    CommonModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4398400415874126',
      adSlot: 5750677092,
      adFormat: 'auto',
      fullWidthResponsive: true
    })
  ],
  exports: [
    MyAdsenseComponent
  ]
})
export class MyAdsenseModule { }
