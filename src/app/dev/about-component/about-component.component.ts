import { Component,
         OnInit,
         animate,
         state,
         style,
         transition,
         trigger,
         keyframes} from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css'],
  animations:[
    trigger('imgShowHide',[
      state('hide',style({opacity:0})),
      state('show',style({opacity:0.8})),
      transition('hide=>show',animate(2000,keyframes([
        style({opacity:0,offset:0}),
        style({opacity:0.5,offset:0.5}),
        style({opacity:0.8,offset:1})
      ])))
    ])
  ]
})
export class AboutComponentComponent implements OnInit {

  self_img_url: string = './../../../assets/imgs/myImg.jpg';
  imgState:string = 'hide'

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.imgState='show';
    },1000);
  }

}
