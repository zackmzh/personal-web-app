import { Component,
         OnInit,
         animate,
         keyframes,
         trigger,
         state,
         style,
         transition} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-content-component',
  templateUrl: './home-content-component.component.html',
  styleUrls: ['./home-content-component.component.css'],
  animations: [
    trigger("flyLeftOut",[
      state('off',style({transform:'translateX(0)'})),
      state('on',style({transform:'translateX(-100%)'})),
      transition("off=>on",animate(1000,keyframes([
        style({opacity:1,transform:'translateX(0)',offset:0}),
        style({opacity:1,transform:'translateX(30px)',offset:0.4}),
        style({opacity:0,transform:'translate(-100%)',offset:1})
      ])))
    ]),
    trigger("flyRightOut",[
      state('off',style({transform:'translateX(0)'})),
      state('on',style({transform:'translateX(100%)'})),
      transition("off=>on",animate(1000,keyframes([
        style({opacity:1,transform:'translateX(0)',offset:0}),
        style({opacity:1,transform:'translateX(-30px)',offset:0.4}),
        style({opacity:0,transform:'translate(100%)',offset:1})
      ])))
    ])
  ]

})
export class HomeContentComponentComponent implements OnInit {

  dev_img_url = './../../../assets/imgs/dev_img.jpg';
  sports_img_url = './../../../assets/imgs/roger.jpg';
  leftState:string;
  rightState:string;

  constructor(private router:Router) { }

  ngOnInit() {
    this.leftState = 'off';
    this.rightState = 'off';
  }

  toDev(){
    this.leftState = (this.leftState==='off') ? "on" :'off';
    setTimeout(()=>{this.router.navigate(['/dev'])},1000);


  };

  toHobbies(){
    this.rightState = (this.rightState ==='off') ? "on" : "off";
    setTimeout(()=>{this.router.navigate(['/hobbies'])},1000);
  };
}
