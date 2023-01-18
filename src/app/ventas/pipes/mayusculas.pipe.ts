import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {

    transform(dato:string, mayus:boolean = true) : string{
        return (mayus) ? dato.toUpperCase() : dato.toLowerCase();
     
    }

}