import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  //i18Select
  public nombre: string = 'Gabriel';
  public genero: string = 'masculino';

  public invitacionMapping = {
    masculino: 'tenerlo',
    femenino: 'tenerla',
    other: '',
  };

  cambiarPersona() {
    if (this.genero === 'masculino') {
      this.genero = 'femenino';
      this.nombre = 'Sofia';
    } else {
      this.genero = 'masculino';
      this.nombre = 'Gabriel';
    }
  }

  //i18Plural
  public clientes: string[] = ['Gabriel', 'Sofia', 'Jose', 'Maria'];
  public clientesMapping = {
    '=0': 'no existen clientes esperando.',
    '=1': 'existe 1 cliente esperando.',
    other: 'existen # clientes esperando',
  };

  borrarCliente() {
    this.clientes.pop();
  }

  //keyValuePipe
  public persona = {
    nombre: 'Gabriel',
    edad: 33,
    pais: 'Argentina',
  };

  //Json pipe
  public jsonValue = [
    { heroe: 'Superman', habilidad: 'Super fuerza' },
    { heroe: 'Spiderman', habilidad: 'Sentido aracnido' },
    { heroe: 'Flash', habilidad: 'Super velocidad' },
  ];

  //Async pipe
  miObservable = interval(1000);

  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa resuelta.");
    }, 3500);
  })
}
