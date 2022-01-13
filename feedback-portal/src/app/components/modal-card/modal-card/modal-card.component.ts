import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/model/feedback';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.css']
})
export class ModalCardComponent implements OnInit {

  feedback : Feedback = new Feedback();
  feedbackLi: Feedback[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  addFeedback(){
    this.feedbackLi.push(this.feedback);
    this.feedback = new Feedback();
  }
  deleteFeedback(feedback: Feedback){
    this.feedbackLi.pop();
  }
  editFeedback(){
    this.feedbackLi.pop();
    this.feedbackLi.push(this.feedback);
    this.feedback = new Feedback();
  }
}
