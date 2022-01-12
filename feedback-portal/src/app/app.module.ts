import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GridDisplayComponent } from './components/Grid/grid-display/grid-display.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { AboutComponent } from './components/about/about.component';
import { ModalComponent } from './components/modal/modal/modal.component';
import { ModalCardComponent } from './components/modal-card/modal-card/modal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GridDisplayComponent,
    ContactFormComponent,
    AboutComponent,
    ModalComponent,
    ModalCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
