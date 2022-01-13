import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  thankPage(){
    this.router.navigate(["thankYou"])
  }
}
