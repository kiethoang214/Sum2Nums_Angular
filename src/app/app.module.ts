import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({

  declarations: [                               //define components
    AppComponent
  ],

  imports: [                                    //import module
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],                                //service for all component in this module
  bootstrap: [AppComponent]                     //root module, include root component
})
export class AppModule { }