import { InterfaceUserInfo } from './../../interfaces/InterfaceUserInfo';
import { PoMenuItem } from '@po-ui/ng-components';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-ok',
  templateUrl: './login-ok.component.html',
  styleUrls: ['./login-ok.component.css']
})

export class LoginOkComponent {
  collapse : boolean = true;
  userInfo : InterfaceUserInfo = {
    name : "Luan Davi Ponick",
    eventos :
      {
        eventoName:"passeio no partque",
        desc:"ander pelo brasil a fora",
        init:"123",
        finish:"123"
      }
  };

  menus: Array<PoMenuItem> = [

    {icon: 'po-icon-menu', label: ' ', action: this.tradeCollapse.bind(this), shortLabel:" "},
    {icon:'po-icon po-icon-profile', label:this.userInfo.name,shortLabel:' '},
    {icon:'po-icon-add', label:'Adicionar',shortLabel:' '},
    {icon:'po-icon-remove', label:'Remover',shortLabel:' '},
    {icon:'po-icon-collum', label:'Colunas 3',shortLabel:' '},
    {icon:'po-icon-exit', label:' ',shortLabel:' '}
  ];

  private tradeCollapse() {
    this.collapse = !this.collapse;
  }
}
