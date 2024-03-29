import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
// import { NgxNumberFormatModule } from 'ngx-number-format';
import {NgxMaskModule} from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgxNumberFormatModule,
    NgxMaskModule.forRoot({
      showMaskTyped : true,
      // clearIfNotMatch : true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
