import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Feedback from '../../model/feedback';


@Injectable({
  providedIn: 'root'
})
export class PostFBService {

  url: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  addFeedbackDB(post: Feedback){
    this.http
      .post(this.url + "/feedback/post", {
      email: post.email,
      name: post.name,
      message: post.message,
    })
    .subscribe((postResponse) => {
      console.log(postResponse)
    });
  }
  getPost(){
    return this.http.get(this.url + "/feedback/posts").toPromise();
  }
  updatepostDB(){

  }
  deletepostDB(post: Feedback){
    return this.http.delete(this.url + '/feedback/' + post.id);
  }
}
