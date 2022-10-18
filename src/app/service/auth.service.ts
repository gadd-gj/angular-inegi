import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { proyectModel, usuarioModel } from '../models/usuario.model';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Estados } from '../models/estados.model';
import { Municipio } from '../models/municipio.model';
import { Pymes } from '../models/pyme.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000/api';

  userToken: string;

  constructor( private http: HttpClient ) {
    this.readToken();
   }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    })
  };
  logout(){
    localStorage.removeItem('token');
  }


  login(usuario: usuarioModel ){
    return this.http.post(`${this.url}/proyects`, usuario).pipe(
        map( (resp: any) => {
          this.saveToken(resp.accessToken);
          return resp;
        })
      );
  }

  nuevoProyecto( proyects: proyectModel ){
    return this.http.post(`${this.url}/proyects`, proyects).pipe(
        map( resp =>{
          this.saveToken(resp['accessToken']);
          return resp;
        })
      );
  }

  signup(usuario: usuarioModel){

    const authData = {
      name: usuario.name,
      edad: usuario.edad,
      email: usuario.email,
      role: ["admin"],
      password: usuario.password,
    };

    return this.http.post(
      `${this.url}/auth/signup`,
      authData
      ).pipe(
        map( resp =>{
          this.saveToken(resp['accessToken']);
          return resp;
        } )
      );
  }

  private saveToken(idToken: any){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  readToken(){
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = "";
    }
  }

  isAuth(): boolean{
    this.readToken()
    return this.userToken.length > 2;
  }


  getEstados(): Observable<Estados> {

    return this.http.get<Estados>(this.url + '/estados', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getMunicipios(entidad): Observable<Municipio> {

    return this.http.get<Municipio>(this.url + '/municipios?entidad=' + entidad, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  getPymes(estado, municipio): Observable<Pymes> {

    return this.http.get<Pymes>(this.url + '/pymes?estado=' + estado +
    '&municipio=' + municipio, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
