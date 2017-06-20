import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TitileComponent } from './titile/titile.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './filter.pipe';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TitileComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
