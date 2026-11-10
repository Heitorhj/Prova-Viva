import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-correcao',
  templateUrl: './correcao.page.html',
  styleUrls: ['./correcao.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class CorrecaoPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
