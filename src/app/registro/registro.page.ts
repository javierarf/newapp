import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formulario!: FormGroup;
  usuario:string="";
  password: string="";
  edad:string="";
  altura:string="";
  peso:string="";
  email:string="";
  constructor(private formbuilder: FormBuilder , private router:Router, private alertController:AlertController) { }

  ngOnInit() {
    this.formulario = this.formbuilder.group({
      usuario: ['', Validators.required],
      edad: ['',Validators.required],
      altura: ['',Validators.required],
      peso: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Form Submitted', this.formulario.value);
    } else {
      console.log('Form not valid');
    }
  }

  login(){
    if (this.usuario.trim()!=='' && this.password.trim()!=='' && this.edad.trim()!=='' && this.altura.trim()!=='' && this.peso.trim()!=='' && this.email.trim()!==''){
      let NavigationExtras:NavigationExtras = {
        state:{
          usuario: this.usuario,
          password: this.password,
          edad: this.edad,
          peso: this.peso,
          altura: this.altura,
          email: this.email
        } 
    }
      this.router.navigate(['/tabs/home'], NavigationExtras);
    }
    else{
      this.presentAlert('Todos los campos se deben completar')
    }
  }
  async presentAlert(mensaje:string){
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje, 
      buttons: ['OK']
    });
    await alert.present();
  }

}