import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginOkComponent } from './components/login-ok/login-ok.component';
import { PoButtonModule } from '@po-ui/ng-components';
import { ColunasComponent } from './components/colunas/colunas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginOkComponent,
    ColunasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
