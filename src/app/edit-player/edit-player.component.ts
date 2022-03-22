import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  allprofilPictures = ['1.webp' ,'2.png', 'monkey.png', 'pinguin.svg', 'serious-woman.svg', '3.png', 'winkboy.svg', '4.jpeg'];

  constructor() { }

  ngOnInit(): void {
  }

}
