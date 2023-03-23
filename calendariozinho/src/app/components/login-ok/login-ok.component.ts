import { PoMenuItem } from '@po-ui/ng-components';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-ok',
  templateUrl: './login-ok.component.html',
  styleUrls: ['./login-ok.component.css']
})

export class LoginOkComponent {
  collapse : boolean = true;

  menus: Array<PoMenuItem> = [
    {icon: 'po-icon-menu', label: ' ', action: this.tradeCollapse.bind(this), shortLabel:" "},
    {icon:'po-icon po-icon-profile', label:'nome',shortLabel:' '},
    {icon:'po-icon-add', label:'Adicionar',shortLabel:' '},
    {icon:'po-icon-remove', label:'Remover',shortLabel:' '},
    {icon:'po-icon-collum', label:'Colunas 3',shortLabel:' '},
    {icon:'po-icon-exit', label:' ',shortLabel:' '}
  ];

  private tradeCollapse() {
    this.collapse = !this.collapse;
  }
}
