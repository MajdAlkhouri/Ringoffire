import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { EditPlayerComponent } from '../edit-player/edit-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  game: Game;
  gameId: string;
  gameOver = false;

  constructor(
    private route: ActivatedRoute,
    // um unsere route zu zugreifen
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // wenn unser programm startet
    this.newGame();
    this.route.params.subscribe((params: any) => {
      //subscribe !!
      console.log(params.id);
      this.gameId = params.id;
      this.firestore
        .collection('games')
        .doc(this.gameId)
        .valueChanges()
        .subscribe((game: any) => {
          //observable
          console.log('Game update', game);
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.player_images = game.player_images;
          this.game.stack = game.stack;
          this.game.pickCardAnimation = game.pickCardAnimation;
          this.game.currentCard = game.currentCard;
        });
    });
  }

  newGame() {
    this.game = new Game();
    // this.firestore.collection('games').add(this.game.toJson());// warum hier auskomentiren ??
  }

  takeCard() {
    if (this.game.stack.length == 0) {
      this.gameOver = true;

    } else if (!this.game.pickCardAnimation) {
      //Nicht verstanden  // es wird ausgeführt nur wenn pickCardAnimation false ist
      this.game.currentCard = this.game.stack.pop(); //pop methode zeigt die letzte wert vom array und entfernt ihn

      this.game.pickCardAnimation = true; // pick-card class wird ausgefürt wenn die variable true ist (wenn man auf die karte klickt)

      console.log('New card: ' + this.game.currentCard);
      console.log('Game is : ', this.game);

      this.game.currentPlayer++; // nächste spieler zum auswählen
      this.game.currentPlayer =
        this.game.currentPlayer % this.game.players.length; //!! nicht verstanden //


      this.saveGame(); // warum zwei mal ??

      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard); //warum
        this.game.pickCardAnimation = false;
        this.saveGame();
      }, 1000); //so muss man 1 sekunde warten bis zum nächste ziehung
    }
  }




  editPlayer(playerId: number) {
    console.log('editplayer', playerId);

    const dialogRef = this.dialog.open(EditPlayerComponent); // dialog zu öfnnen um das bild zu ändern

    dialogRef.afterClosed().subscribe((change: string) => {
      if (change) {
        if (change == 'DELETE') {
          this.game.players.splice(playerId, 1);
        } else {
          console.log('Recived change', change);
          this.game.player_images[playerId] = change; // um das bild zu aktualiesieren
        }
        this.saveGame();
      }
    });
  }

  openDialog(): void {
    // für neue spielre hinzufügen
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        // warum name &&
        // sonst wird der trotzdem hinzugefügt wenn man auf no thanks clickt
        this.game.players.push(name); //!!
        this.game.player_images.push('standard.jpeg');
        this.saveGame(); // um das spiel zu speichern
      }
    });
  }

  saveGame() {
    this.firestore
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJson());
  }
}
