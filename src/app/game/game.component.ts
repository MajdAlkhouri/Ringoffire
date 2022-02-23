import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  pickCardAnimation = false; // erst die variable auf false setzen
  currentCard: string = ''; // aber das ist ein bild
  game: Game; //!!

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // wenn unser programm startet
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      //Nicht verstanden  // es wird ausgeführt nur wenn pickCardAnimation false ist
      this.currentCard = this.game.stack.pop(); //pop methode zeigt die letzte wert vom array und entfernt ihn
      console.log(this.currentCard);
      this.pickCardAnimation = true; // pick-card class wird ausgefürt wenn die variable true ist (wenn man auf die karte klickt)
 
      console.log('New card: ' + this.currentCard);
      console.log('Game is : ', this.currentCard);
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard); //warum
        this.pickCardAnimation = false;
      }, 1000); //so muss man 1 sekunde warten bis zum nächste ziehung
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      console.log('The dialog was closed');
      this.game.players.push(name);
     
    });
  }

}



