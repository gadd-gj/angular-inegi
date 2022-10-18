import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { proyectModel, usuarioModel } from '../models/usuario.model';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: usuarioModel;
  proyects: proyectModel;
  remenber = false;

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.usuario = new usuarioModel();

    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.remenber = true;
    }

  }


  login(){
  
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por Favor ...',
    });
    Swal.showLoading();

    this.auth.nuevoProyecto(this.proyects).subscribe(
      resp =>{
        Swal.close();

        if (this.remenber) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/map');
      },(error) => {
        Swal.fire({
          icon: 'error',
          title: 'Al Autenticar',
          text: "Usuario o Contraseña Invalidos",
        });
      }
    );

  }


  nuevoProyecto(){
  
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por Favor ...',
    });
    Swal.showLoading();

    this.auth.nuevoProyecto(this.proyects).subscribe(
      resp =>{
        Swal.close();

        if (this.remenber) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/map');
      },(error) => {
        Swal.fire({
          icon: 'error',
          title: 'Al Autenticar',
          text: "Usuario o Contraseña Invalidos",
        });
      }
    );

  }

}
