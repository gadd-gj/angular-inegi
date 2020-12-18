import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path:'', component: LandingpageComponent},
  {path:'landingpage', component: LandingpageComponent},
  {path:'login', component: LoginComponent},
  {path:'signin', component: SigninComponent},
  {path:'map', component: MapComponent,canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
