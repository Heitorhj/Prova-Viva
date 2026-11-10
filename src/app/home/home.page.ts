import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

import { MatriculaPipe } from '../pipes/matricula-pipe';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MatriculaPipe],
})
export class HomePage {

  numeroMatricula = '20260042';

  constructor() {}
}
