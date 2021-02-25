import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  model = {
    email : '',
    password: ''
  };
  showcart = true;
  // tslint:disable-next-line: max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  count: string;
  error: boolean;
  incorrect: boolean;
  constructor(private modalservice: ModalService, private router: Router, public appservice: AppService) {
    localStorage.setItem('show', '1');
   }
  ngOnInit() {
    localStorage.setItem('show', '1');
  }

  onSubmit(form: NgForm) {
  const credentials = JSON.parse(localStorage.getItem('credentials'));
  if (credentials){
     switch (credentials.email){
       case form.value.email:
        this.closeModal('createModal');
        this.router.navigate(['ecommerce/checkout']);
        break;
        default:
        this.incorrect = true;
     }
     // check
   }else{
     this.error = true;
   }
  }

  register(form: NgForm){
    localStorage.setItem('credentials', JSON.stringify(form.value));
    this.closeModal('createModal');
    this.router.navigate(['ecommerce/checkout']);
  }

  ngDoCheck(){
    if (localStorage.getItem('count')){
      this.count = localStorage.getItem('count');
    }else{
      this.count = '0';
    }
  }

  openModal(id){
    this.modalservice.open(id);
  }
  closeModal(id){
    this.modalservice.close(id);
  }
}
