import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { AttributeExpoComponent } from './attribute-expo/attribute-expo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AttributeExpoComponent //components,directives and pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //connected modules
  ],
  providers: [], //services
  bootstrap: [AppComponent] //the components that can be called in index.html
})
export class AppModule { }
