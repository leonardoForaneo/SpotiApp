import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [],
})
export class TarjetasComponent {
  @Input() items: any[] = [];
  constructor() {}
}
