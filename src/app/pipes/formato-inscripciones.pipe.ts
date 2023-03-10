import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoInscripciones'
})
export class FormatoInscripcionesPipe implements PipeTransform {

  transform(value: boolean): string {
    let resultado: string
    if (value){
      resultado = "Abiertas"
    }else{
      resultado = "Cerradas"
    }
    
    return resultado;
  }

}
