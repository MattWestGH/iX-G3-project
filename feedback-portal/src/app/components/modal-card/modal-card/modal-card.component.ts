import { Component, OnInit } from '@angular/core';
import Feedback from 'src/app/model/feedback';
import { PostFBService } from 'src/app/rest-api/services/post-fb.service';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.css']
})
export class ModalCardComponent implements OnInit {

  feedback : Feedback = new Feedback();
  feedbackLi: Feedback[] = [];
  editing: boolean = false;
  constructor(private postService: PostFBService) { }

  ngOnInit(): void {
  }
  async addFeedback(){
    await this.postService.addFeedbackDB(this.feedback);
    this.feedback = new Feedback();
  }
  async fetchFeedback(){
   this.feedbackLi = [];
    let res: any = await this.postService.getPost();
    for(let i = 0; i < res.posts.length; i++){
      const post = new Feedback();
      post.id = res.posts[i]._id;
      post.email = res.posts[i].email;
      post.name = res.posts[i].name;
      post.message = res.posts[i].message;
      post.createdAt = res.posts[i].createdAt;
      post.updatedAt = res.posts[i].updatedAt;
      this.feedbackLi.push(post)
    }
  }
  editFeedback(feedback: Feedback){
    console.log(feedback);
    this.editing = true;
    this.feedback = feedback;

  }
  async deleteFeedback(feedback: Feedback){
    await this.postService.deletepostDB(feedback);
  }
  async updateFeedback(){
    await this.postService.updatepostDB();
  }
}
