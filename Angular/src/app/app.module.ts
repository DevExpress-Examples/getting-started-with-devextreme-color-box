import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxColorBoxModule } from 'devextreme-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxColorBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
