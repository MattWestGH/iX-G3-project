import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { GridDisplayComponent } from './components/Grid/grid-display/grid-display.component';
import { ThankYouComponent } from './components/thank-page/thank-you/thank-you.component';


const routes: Routes = [{
  path: "",
  component: GridDisplayComponent
},
  {
  path: "Home",
  component: GridDisplayComponent
},
{
  path: "Contact",
  component: ContactFormComponent
},
{
  path: "About",
  component: AboutComponent
},
{
  path: "thankYou",
  component: ThankYouComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
