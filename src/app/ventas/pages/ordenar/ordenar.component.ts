import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent{

  public esMayuscula = false;

  public ordenarPor : string = '';

  public heroes : Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Thor',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Antman',
      vuela: false,
      color: Color.azul
    },
]

  cambiarCase(){
    this.esMayuscula = !this.esMayuscula;
  }

  cambiarOrder(valor : string){
    this.ordenarPor = valor;
  }
}
