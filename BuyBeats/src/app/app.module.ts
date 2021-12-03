import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TracksComponent } from './tracks/tracks.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { LoginComponent } from './login/login.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { UploadComponent } from './upload/upload.component';
import { RegistroComponent } from './registro/registro.component';
import { TsubidasComponent } from './tsubidas/tsubidas.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    TracksComponent,
    BibliotecaComponent,
    CuentaComponent,
    AyudaComponent,
    LoginComponent,
    RecuperacionComponent,
    UploadComponent,
    RegistroComponent,
    TsubidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    ModalModule,
    PopoverModule,
    TooltipModule,
    ButtonsModule,
    MdbTabsModule,
    MdbRippleModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],

})


export class AppModule { }


