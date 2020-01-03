import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './allcomponent/add-contact/add-contact.component';
import { ContactListComponent } from './allcomponent/contact-list/contact-list.component';
import { FilterPipe } from './filter.pipe';
import { JsonService } from './json.service';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule

  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
