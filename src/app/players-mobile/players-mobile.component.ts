import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-mobile',
  templateUrl: './players-mobile.component.html',
  styleUrls: ['./players-mobile.component.scss']
})
export class PlayersMobileComponent implements OnInit {
  @Input() name; //variable für spieler namen .. was wir rein geben in unsere componente
  @Input() playerActive : boolean = false;
  @Input() image = '1.webp'; 


  constructor() { }

  ngOnInit(): void {
  }

}
