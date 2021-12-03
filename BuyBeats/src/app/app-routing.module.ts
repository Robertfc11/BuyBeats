import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ModificarComponent } from './modificar/modificar.component';



const routes: Routes = [
    { path: 'principal', component: InicioComponent },
    { path: 'tracks', component: TracksComponent },
    { path: 'biblioteca', component: BibliotecaComponent },
    { path: 'cuenta', component: CuentaComponent },
    { path: 'ayuda', component: AyudaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'recuperar', component: RecuperacionComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'tsubidas', component: TsubidasComponent },
    { path: 'modificar', component: ModificarComponent },
    
  
    { path: '**', pathMatch: 'full', redirectTo: 'login'}
    // { path: '**', component: PageNotFoundComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  