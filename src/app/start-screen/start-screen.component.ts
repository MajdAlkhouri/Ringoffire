import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent implements OnInit {
  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit(): void {}

  newGame() { // wenn man auf den button drückt wird ein neues spiel erstellt 
    let game = new Game(); // Ich muss ein neues spiel anlegen 
    this.firestore // das neues spiel  wird  in daten bank hinzugefügt
      .collection('games')
      .add(game.toJson())

      .then((gameInfo: any) => { // was macht .then 
        console.log(gameInfo);

        this.router.navigateByUrl('/game/' + gameInfo.id); //um weiter zu leiten zu app-game component // url ändern 
      });
  }
}
