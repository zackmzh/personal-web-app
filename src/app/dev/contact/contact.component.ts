import { Component, OnInit } from '@angular/core';
import { CompanyInfoModel } from './../../data-model/company-info-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  company_info : CompanyInfoModel;

  dropMeAMessage:string;
  name:any;
  firstname:string;
  lastname:string;
  company:string;
  email:string;


  constructor() { }

  ngOnInit() {
  }

  saveCompanyInfo(){

    this.name  = {
      firstname:this.firstname,
      lastname:this.lastname
    }


    this.company_info={
      name : this.name,
      email :this.email,
      company : this.company,
      message : this.dropMeAMessage
    };

    console.log(this.company_info);
}


}
