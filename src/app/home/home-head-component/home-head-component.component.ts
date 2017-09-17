import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-head-component',
  templateUrl: './home-head-component.component.html',
  styleUrls: ['./home-head-component.component.css']
})
export class HomeHeadComponentComponent implements OnInit {

  head_img_url = './../../../assets/imgs/myImg.jpg';

  //TODO: nav bar;

  constructor() { }

  ngOnInit() {
  }

}
