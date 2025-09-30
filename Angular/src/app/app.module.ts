import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxColorBoxModule } from 'devextreme-angular/ui/color-box';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxColorBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
