import { ThisReceiver } from '@angular/compiler';
import { Component} from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent{
  //i18Select
  public nombre : string = 'Gabriel';
  public genero : string = 'masculino';

  public invitacionMapping ={
    'masculino' : 'tenerlo',
    'femenino' : 'tenerla',
    'other': ''
  }

  cambiarPersona(){
    if(this.genero === 'masculino'){
      this.genero = 'femenino';
      this.nombre = 'Sofia';
    } else{
      this.genero = 'masculino';
      this.nombre = 'Gabriel';
    }
  }

   //i18Plural
   public clientes : string[] = ["Gabriel", "Maria","Sofia", "Jose"];
   public clientesMapping={
    '=0': 'no existen clientes esperando.',
    '=1': 'existe 1 cliente esperando.',
    'other': 'existen # clientes esperando'
   }

   borrarCliente(){
      this.clientes.pop();
   }

  
}
