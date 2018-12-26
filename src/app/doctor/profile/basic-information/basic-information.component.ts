import { Component, OnInit } from '@angular/core';
import { openClose } from '../../../animations'
import * as $ from 'jquery'

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  animations: [ openClose ]
})
export class BasicInformationComponent implements OnInit {
  yourPracticeSec = true;
  confirmInfoSec = false;
  infoNotVerified = false;
  thankYouSection = false;
  myFields: any = { firstName: false }
  gender: string = "Female"

  constructor() { }

  ngOnInit() {
    
  }

  submitInfoBtn() {
    this.yourPracticeSec = false;
    this.confirmInfoSec = true;
    this.thankYouSection = false;
  }
  goBackBtn() {
    this.yourPracticeSec = true;
    this.confirmInfoSec = false;
    this.thankYouSection = false;
  }
  reqOtp() {
    this.infoNotVerified = true;
    this.yourPracticeSec = false;
    this.confirmInfoSec = false;
    this.thankYouSection = false;
  }
  backToForm() {
    this.infoNotVerified = false;
    this.yourPracticeSec = true;
    this.confirmInfoSec = false;
    this.thankYouSection = false;
  }
  confirmOTP(){
    this.yourPracticeSec = false;
    this.thankYouSection = true;
    this.confirmInfoSec = false;
    this.infoNotVerified = false;
  }
  addLabelClass(e) {
    $(e.target.parentElement.children[1]).addClass('animatedLabel')
  }
  removeLabelClass(e){
    if(e.target.value == '') {
      $(e.target.parentElement.children[1]).removeClass('animatedLabel')
    }
  }
  
}
