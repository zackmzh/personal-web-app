import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content-component',
  templateUrl: './home-content-component.component.html',
  styleUrls: ['./home-content-component.component.css']
})
export class HomeContentComponentComponent implements OnInit {

  dev_img_url = './../../../assets/imgs/dev_img.jpg';
  sports_img_url = './../../../assets/imgs/roger.jpg';

  constructor() { }

  ngOnInit() {
  }

}
