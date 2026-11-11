import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

import { MatriculaPipe } from '../pipes/matricula-pipe';
import { SituacaoCorrecaoPipe } from '../pipes/situacao-correcao-pipe';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MatriculaPipe, SituacaoCorrecaoPipe, DatePipe, DecimalPipe],
})
export class HomePage {

  numeroMatricula = '20260042';
  status = 'PENDENTE';
  dataCorrecao = new Date();

  constructor() {}
}
