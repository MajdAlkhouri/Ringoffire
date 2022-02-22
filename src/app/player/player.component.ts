import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() name; //variable für spieler namen .. was wir rein geben in unsere componente

  constructor() { }

  ngOnInit(): void {
  }

}
