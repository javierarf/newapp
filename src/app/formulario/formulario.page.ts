import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  nombre: any='';
  apellido: any='';
  selectedOption: any='';
  selectedDate: any='';

  constructor(private alertController:AlertController, private router:Router, private activaterouter:ActivatedRoute) {
  }

  ngOnInit() {
    this.nombre = localStorage.getItem("nombre");
    this.apellido = localStorage.getItem("apellido");
    this.selectedOption = localStorage.getItem("selectedOption");
    this.selectedDate = localStorage.getItem("selectedDate");
  }
  mostrar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {

      // Logica para manejar el envio del formulario cuando es valido
      this.presentAlert('Gracias por enviar formulario' +this.nombre+' '+this.apellido);

         localStorage.setItem('nombre', this.nombre);
         localStorage.setItem('apellido',this.apellido);
         localStorage.setItem('selectedOption',this.selectedOption);
         localStorage.setItem('selectedDate',this.selectedDate);
 

    }
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.selectedOption = '';
    this.selectedDate = '';

    localStorage.clear();
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  home(){
    this.router.navigate(['/tabs/home']);
  }
}
