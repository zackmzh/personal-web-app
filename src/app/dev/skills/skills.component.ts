import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillPics:any;

  constructor() {
    this.skillPics = [
      {"url":"./../../../assets/imgs/techs/html5.png","title":"HTML5"},
      {"url":"./../../../assets/imgs/techs/CSS3.jpg","title":"CSS3"},
      {"url":"./../../../assets/imgs/techs/js.jpg","title":"JavaScipt"},
      {"url":"./../../../assets/imgs/techs/angularjs.png","title":"AngularJS"},
      {"url":"./../../../assets/imgs/techs/angular2.jpg","title":"Angular2"},
      {"url":"./../../../assets/imgs/techs/Bootstrap.png","title":"Bootstrap"},
      {"url":"./../../../assets/imgs/techs/git_logo.png","title":"GIT"},
      {"url":"./../../../assets/imgs/techs/gulp.png","title":"Gulp"},
      {"url":"./../../../assets/imgs/techs/php.png","title":"PHP"},
      {"url":"./../../../assets/imgs/techs/laravel-logo-big.png","title":"Laravel"},
      {"url":"./../../../assets/imgs/techs/mamp.png","title":"MAMP"},
      {"url":"./../../../assets/imgs/techs/mongodb.png","title":"MongoDB"},
      {"url":"./../../../assets/imgs/techs/mysql.png","title":"MySql"},
      {"url":"./../../../assets/imgs/techs/nodejs_logo.png","title":"NodeJS"},
      {"url":"./../../../assets/imgs/techs/oracle.jpg","title":"Oracle"},
      {"url":"./../../../assets/imgs/techs/sql.png","title":"SQL"}
    ]
  }

  ngOnInit() {
  }

}
