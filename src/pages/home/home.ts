import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];

  constructor(public navCtrl: NavController) {
    for (let index = 0; index < 10; index++) {
      let element = {
        usuario: "Usuário " + index,
        texto: "Bem vindo " + index,
        foto_banner: "https://picsum.photos/400/300?random"+index,
        foto_usuario: "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/marty-avatar.png",
        qtd_curtidas: index + 2,
        qtd_comentarios: index + 20,
      };

      this.items.push(element);
    }
  
  }
}