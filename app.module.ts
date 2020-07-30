import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
// import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    // BasicScrollComponent,
    // InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
