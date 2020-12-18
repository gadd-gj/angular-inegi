import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  isLogin(): boolean{
    return this.auth.isAuth();
  }

}