import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() name; //variable für spieler namen .. was wir rein geben in unsere componente
  @Input() image = '1.webp';
  @Input() playerActive : boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
