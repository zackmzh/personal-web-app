import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  self_img_url: string = './../../assets/imgs/myImg.jpg';

  constructor() { }

  ngOnInit() {
  }

}
