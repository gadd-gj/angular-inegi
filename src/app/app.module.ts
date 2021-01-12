import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';




@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    SigninComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }