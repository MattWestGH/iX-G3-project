import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Contact from '../../model/contact';


@Injectable({
  providedIn: 'root'
})
export class PostContactService {

  url: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  addContactDB(post: Contact){
    this.http
      .post(this.url + "/contact/contactpost", {
      email: post.email,
      name: post.name,
      surname: post.surname,
      number: post.number,
    })
    .subscribe((postResponse) => {
      console.log(postResponse)
    });
  };
}