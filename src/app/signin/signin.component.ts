import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { usuarioModel } from '../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
 
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  usuario: usuarioModel = new usuarioModel();


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por Favor ...',
    });
    Swal.showLoading();

    this.auth.signup(this.usuario).subscribe(
      resp =>{
        Swal.close();
        this.router.navigateByUrl('/map');
      },(error)=>{
        
        Swal.fire({
          icon: 'error',
          title: 'Al Autenticar',
          text: error.error.message,
        });
      }
    );

  }
  
  
  
  // Swal.fire({
  //   title: 'Error!',
  //   text: `${this.respuesta}`,
  //   icon: 'error',
  //   showConfirmButton: false,
  //   timer: 3000
  // });
}