import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ SigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Llamar a la funcion vacio()', () => {

  //   //Arrange
  //   let res = false;

  //   component.name = '';
  //   component.email = '';
  //   component.password = '';
  //   //Act
  //   component.vacio();
  //   res = component.res;
  //   //Assert
  //   expect(res).toBe(false);
    
  
  // });

  // it('Llamar a la funcion valUser()', () => {
  //   let res = true;

  //   component.email = 'gaddiel@gmail.com';

  //   component.valUser();
  //   res = component.res;

  //   expect(res).toBe(false);

  // });

  // it('Llamar a la funcion validar() para validar que los campos no esten vacios', () =>{
    
  //   let res = '';

  //   component.age = null;
  //   component.name = '';
  //   component.email = '';
  //   component.password = '';

  //   component.validar();
  //   res = component.respuesta;

  //   expect(res).toBe('Los campos están vacíos');

  // });


  // it('Llamar a la funcion validar() para verificar el usuario', () =>{
    
  //   let res = '';

  //   component.age = 20;
  //   component.name = 'jorge';
  //   component.email = 'gustavo@gmail.com';
  //   component.password = '123456';

  //   component.validar();
  //   res = component.respuesta;

  //   expect(res).toBe('El usuario existe');

  // });

  // it('Llamar a la funcion validar() para verificar la edad', () =>{
    
  //   let res = '';

  //   component.age = 140;
  //   component.name = 'gadd';
  //   component.email = 'gaddiel@gmail.com';
  //   component.password = '123456';


  //   component.validar();
  //   res = component.respuesta;

  //   expect(res).toBe('La edad no es valida');

  // });


  // it('Llamar a la funcion validar() para validar el correo', () =>{
    
  //   let res = '';

  //   component.age = 50;
  //   component.name = 'jorge';
  //   component.email = 'jorge.com';
  //   component.password = '123456';

  //   component.validar();
  //   res = component.respuesta;

  //   expect(res).toBe('El correo no es valido');

  // });

});