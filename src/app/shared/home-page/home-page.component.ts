import { Component, OnInit } from '@angular/core';
import { openClose } from '../../animations'
import * as $ from 'jquery'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cliniciansFamilySection = true;
  loginSec = false;
  passwordSec = false;
  optSec = false;
  constructor() { }

  ngOnInit() {
  }

  opdSignIn() {
    this.loginSec = true;
    this.cliniciansFamilySection = false;
    this.passwordSec = false;
    this.optSec = false;
  }
  loginBtn() {
    this.loginSec = false;
    this.cliniciansFamilySection = false;
    this.passwordSec = true;
  }
  passwordLoginBtn() {
    this.loginSec = false;
    this.cliniciansFamilySection = false;
    this.passwordSec = false;
    this.optSec = true;
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
