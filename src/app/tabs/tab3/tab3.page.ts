import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  user = {
    name: '',
    email: '',
    edad: '',
    altura:'',
    peso:'',

  };

  constructor() { }

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.user.name = 'Juan';
    this.user.email = 'juan@ejemplo.com';
    this.user.edad = '25';
    this.user.altura = '160';
    this.user.peso= '70';
  }

  saveProfile() {
    console.log('Perfil guardado', this.user);
  }
}