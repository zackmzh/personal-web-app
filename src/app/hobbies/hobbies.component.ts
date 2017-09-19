import { Component,
  OnInit,
  animate,
  state,
  style,
  transition,
  trigger,
  keyframes} from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  travel_img_url :string;
  tennis_img_url:string;
  table_tennis_img_url:string;
  imgStatus:string='hide';

  constructor() { }

  ngOnInit() {
    this.travel_img_url="./../../../assets/imgs/travel_me.jpeg";
    this.tennis_img_url="./../../../assets/imgs/tennis_my.jpg";
    this.table_tennis_img_url="./../../../assets/imgs/table_tennis.JPG";
  }

}
