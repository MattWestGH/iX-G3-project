import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridDisplayComponent } from '../Grid/grid-display/grid-display.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(  private router: Router) { }
  ngOnInit(): void {
  }
 homeClicked(){
  this.router.navigate(['Home']);
 }
 contactClicked(){
  this.router.navigate(['Contact']);
}
aboutClicked(){
  this.router.navigate(['About']);
}
}
