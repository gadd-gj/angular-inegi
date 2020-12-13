import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  name: string ='';
  age: number = 0;
  email: string ='';
  password: string ='';
  res:boolean;
  respuesta = '';

  listUser: User[] = [
    {id:1, username:"gustavo@gmail.com", password:"123456"},
    {id:2, username:"gaddiel@gmail.com", password:"123789"}
  ];

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  vacio(){
    this.res = false;
    if (this.name != '' && this.email != '' && this.password != '') {
      this.res = true;
    } 
    return this.res;
  }

  valUser(){
    this.res = true;
    for (const u of this.listUser) {
      if (this.email === u.username) {
        this.res = false;
      }
    }
    return this.res;
  }
  

  validar(){
    if (this.vacio()) {
      if (this.age > -1 && this.age < 120) {
        if (this.email.match(this.emailPattern)) {
          if (this.valUser()) {
            this.route.navigate(['/map']);
          }else{
            this.respuesta = 'El usuario existe';
            Swal.fire({
              title: 'Error!',
              text: `${this.respuesta}`,
              icon: 'error',
              showConfirmButton: false,
              timer: 3000
            });
          }
        } else {
          this.respuesta = 'El correo no es valido';
        Swal.fire({
          title: 'Error!',
          text: `${this.respuesta}`,
          icon: 'error',
          showConfirmButton: false,
          timer: 3000
        });
        }
      }else{
        this.respuesta = 'La edad no es valida';
        Swal.fire({
          title: 'Error!',
          text: `${this.respuesta}`,
          icon: 'error',
          showConfirmButton: false,
          timer: 3000
        });
      }
    } else {
      this.respuesta = 'Los campos están vacíos';
        Swal.fire({
          title: 'Error!',
          text: `${this.respuesta}`,
          icon: 'error',
          showConfirmButton: false,
          timer: 3000
        });
    }

    return this.respuesta;
  }



}
