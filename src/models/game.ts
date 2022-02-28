export class Game { // JSON object
  public players: string[] = []; // : zeigt was von daten tyb rein kommt
  public stack: string[] = []; // was ist puplic
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 1; i < 14; i++) { //let i = 1; Initialisierung/ i < 14; bedingung/ i++ Inkrementierungsausdruck
      this.stack.push('spade_' + i);
      this.stack.push('hearts_' + i);//schleifeKörper 
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
    }
    shuffle(this.stack);
  }
}


function shuffle(array) { // um die karten zu mischen 
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}