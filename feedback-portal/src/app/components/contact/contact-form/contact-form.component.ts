import { Component, OnInit } from '@angular/core';
import  Contact  from 'src/app/model/contact';
import { PostContactService } from 'src/app/rest-api/services/post-contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: Contact = new Contact;
  constructor(private postContact: PostContactService) { }

  ngOnInit(): void {
  }
  async submitContact(){
    await this.postContact.addContactDB(this.contactForm);
    this.contactForm = new Contact();
  }
  
}
