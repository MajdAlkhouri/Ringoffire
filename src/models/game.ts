export class Game {
  // JSON object
  public players: string[] = []; // : zeigt was von daten tyb rein kommt
  public player_images: string[] = [];
  public stack: string[] = []; // was ist puplic
  public playedCards: string[] = [];
  public currentPlayer: number = 0;
  public pickCardAnimation = false; // erst die variable auf false setzen
  public currentCard: string = ''; // aber das ist ein bild

  constructor() {
    for (let i = 1; i < 14; i++) {
      //let i = 1; Initialisierung/ i < 14; bedingung/ i++ Inkrementierungsausdruck
      this.stack.push('spade_' + i);
      this.stack.push('hearts_' + i); //schleifeKörper
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
    }
    shuffle(this.stack);
  }

  public toJson() {  // um classe Game zu einen JSON umwandeln warum??
    return {
      players: this.players,
      player_images: this.player_images,
      stack: this.stack,
      playedCards: this.playedCards,
      currentPlayer: this.currentPlayer,
      pickCardAnimation: this.pickCardAnimation,
      currentCard : this.currentCard,

    };
  }
}

function shuffle(array) {
  // um die karten zu mischen
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
