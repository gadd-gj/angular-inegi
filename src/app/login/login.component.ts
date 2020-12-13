import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  listUser: User[] = [
    {id:1, username:"gustavo@gmail.com", password:"123456"},
    {id:2, username:"gaddiel@gmail.com", password:"123789"}
  ];

 
  username: string = '';
  password: string = '';
  res: boolean;

  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }

  valUser(){
    this.res = false;
    for (const u of this.listUser) {
      if (this.username === u.username && this.password === u.password) {
        
        this.res = true;
      }
    }
    return this.res;
  }

  validar(){
    let res;
    if (this.username !="" && this.password !="") {
        if (this.valUser()) {
          this.route.navigate(['/map']);
        } else {
          res = 'Usuario y/o contraseña incorrecto';
          Swal.fire({
            title: 'Error!',
            text: `${res}`,
            icon: 'error',
            showConfirmButton: false,
            timer: 3000
          });
        }
    } else {
      res = 'Lo campos están vacíos';
        Swal.fire({
          title: 'Error!',
          text: `${res}`,
          icon: 'error',
          showConfirmButton: false,
          timer: 3000
        });
    }

    return res;
  }

  



}
