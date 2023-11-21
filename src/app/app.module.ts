import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [AppComponent, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule],
  exports: [AppComponent],
  providers: [],
})
export class AppModule {}
