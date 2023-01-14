import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent {
  public ventasNetas : number = 9812345.45123;
  public porcentaje : number = 0.321345;
}
