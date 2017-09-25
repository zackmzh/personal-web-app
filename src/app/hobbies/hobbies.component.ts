import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  travel_img_url:string;
  tennis_img_url:string;
  table_tennis_img_url:string;
  images:any;

  constructor() {
    this.images = [
      {"url":"./../../../assets/imgs/tennis_racket.jpeg","title":"My Tennis Racket"},
      {"url":"./../../../assets/imgs/usopen_me.jpeg","title":"US Open 2017"},
      {"url":"./../../../assets/imgs/sleep_no_more.jpeg","title":"The Show"},
      {"url":"./../../../assets/imgs/shot.jpeg","title":"Shotting Game"},
      {"url":"./../../../assets/imgs/travel.png","title":"China"},
      {"url":"./../../../assets/imgs/new_york.jpeg","title":"New York"},
      {"url":"./../../../assets/imgs/grace_farm.jpeg","title":"The Grace Farms"},
      {"url":"./../../../assets/imgs/halloween.jpeg","title":"Halloween"},
      {"url":"./../../../assets/imgs/eastern_prison.jpeg","title":"Eastern State Penitentiary"},
      {"url":"./../../../assets/imgs/party.jpeg","title":"Party with friends"},
      {"url":"./../../../assets/imgs/chicago.jpeg","title":"Chicago"},
      {"url":"./../../../assets/imgs/cat_coffee.jpeg","title":"Coffee"}

    ];
  }

  ngOnInit() {
    this.travel_img_url="./../../../assets/imgs/travel_me.jpeg";
    this.tennis_img_url="./../../../assets/imgs/tennis_my.jpg";
    this.table_tennis_img_url="./../../../assets/imgs/table_tennis.JPG";
  }

  scrollToTop(scrollDuration:number) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
          window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval);
      },15);
  };

}
