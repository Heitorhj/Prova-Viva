import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.page.html',
  styleUrls: ['./avaliacoes.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class AvaliacoesPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
