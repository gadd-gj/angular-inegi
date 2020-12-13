import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('Llamar a la funcion valUser()', () => {
    let res = null;

    component.username = 'gustavo@gmail.com';
    component.password = '123456';

    component.valUser();
    res = component.res;

    expect(res).toBe(true);

  });


  it('Llamar a la funcion validar() para validar que los campos no esten vacios', () => {

    let res = '';

    component.username = '';
    component.password = '';

    component.validar();
    res = component.respuesta;

    expect(res).toBe('Los campos están vacíos');

  });

  it('Llamar a la funcion validar() para validar usuario y contraseña', () => {

    let res = '';

    component.username = 'gadd@gmail.com';
    component.password = '123789';

    component.validar();
    res = component.respuesta;

    expect(res).toBe('Usuario y/o contraseña incorrecto');

  });

});