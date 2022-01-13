import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: Contact = new Contact;
  constructor() { }

  ngOnInit(): void {
  }
  submitContact(){
    console.log(this.contactForm)
    this.contactForm = new Contact;
  }
  
}
