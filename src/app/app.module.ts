import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { SubstractionComponent } from './substraction/substraction.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    SubstractionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
