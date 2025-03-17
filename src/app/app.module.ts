import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent //components,directives and pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //connected modules
  ],
  providers: [], //services
  bootstrap: [AppComponent] //the components that can be called in index.html
})
export class AppModule { }
