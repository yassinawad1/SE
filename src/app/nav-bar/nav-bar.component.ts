import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }


  ngOnInit():void {
  }

  navMargin:number =  -100;
  nav_width:number = 0;
  isMenuInView:boolean = false;

  span1_transform:string = "none";
  span2_opacity:number = 1;
  span3_transform:string = "none";


  viewMenu(page:string){
    if(this.isMenuInView || page=="hide"){
      this.nav_width = 0;
      this.navMargin = -100;
      this.span1_transform = "none";
      this.span2_opacity = 1;
      this.span3_transform = "none";
    }else{
      this.nav_width = 100;
      this.navMargin = -1;
      this.span1_transform = "rotate(45deg) translate(1px, -1px)";
      this.span2_opacity = 0;
      this.span3_transform = "rotate(-45deg) translate(0, -1px)";
      console.log("blahh", this.nav_width)
    }
    this.isMenuInView = !this.isMenuInView;
  }
  
}
