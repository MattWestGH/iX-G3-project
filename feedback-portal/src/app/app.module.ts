import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GridDisplayComponent } from './components/Grid/grid-display/grid-display.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ModalComponent } from './components/modal/modal/modal.component';
import { ModalCardComponent } from './components/modal-card/modal-card/modal-card.component';
import { FormsModule } from '@angular/forms';
import { ThankYouComponent } from './components/thank-page/thank-you/thank-you.component';
import {HttpClientModule} from '@angular/common/http'
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GridDisplayComponent,
    ContactFormComponent,
    AboutComponent,
    ModalComponent,
    ModalCardComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
