import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string="";
  password: string="";
  constructor(private alertController:AlertController, private router:Router) { }

  ngOnInit() {
  }

  login(){
    if (this.usuario.trim()=='juan' && this.password.trim()=='1234'){
      let NavigationExtras:NavigationExtras = {
        state:{
          usuario: this.usuario,
          password: this.password
        } 
    }
      this.router.navigate(['/tabs/home'], NavigationExtras);
    }
    else{
      this.presentAlert('Usuario o contraseña incorrecto')
    }
  }

  registrar(){
    this.router.navigate(['/registro']);
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
