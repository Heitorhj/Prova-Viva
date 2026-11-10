import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'matricula',
})
export class MatriculaPipe implements PipeTransform {
  // Assinatura padrão do método transform, pois usamos uma pipe
  // que recebe um valor do tipo string e retorna uma string formatada.
  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }

    if (value.length !== 8) {
      return value;
    }

    const primeira = value.slice(0, 4);
    const segunda = value.slice(-4);

    return `${primeira} ${segunda}`;

  }
}
