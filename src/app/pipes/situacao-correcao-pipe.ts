import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacaoCorrecao',
})
export class SituacaoCorrecaoPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }

    switch (value) {

      case 'PENDENTE':
        return 'Pendente de Correção';

      case 'CORRIGIDO':
        return 'Corrigido';

      default:
        return value;

    }
  }
}
