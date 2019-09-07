import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyAdsenseModule } from '../shared/component/my-adsense/my-adsense.module';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MyAdsenseModule
  ],
  exports: [
    StartComponent
  ]
})
export class StartModule { }
