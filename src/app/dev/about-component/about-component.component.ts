import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {

  self_img_url: string = './../../../assets/imgs/myImg.jpg';

  constructor() { }

  ngOnInit() {
  }

}
