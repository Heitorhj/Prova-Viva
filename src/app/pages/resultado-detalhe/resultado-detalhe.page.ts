import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-resultado-detalhe',
  templateUrl: './resultado-detalhe.page.html',
  styleUrls: ['./resultado-detalhe.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class ResultadoDetalhePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
