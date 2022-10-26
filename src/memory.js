class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    console.log(this.cards)
    console.log(typeof this.pairsGuessed)

  }

  shuffleCards() {
    if (this.cards) return this.cards.sort(() => Math.random() - 0.5)
  }


  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 === card2) {
      this.pairsGuessed++
      this.pairsClicked = 0
      return true
    } else {
      this.pairsClicked++
      return false
    }

  }

  checkIfFinished() {
    // ... write your code here
    let totalPairs = this.cards.length / 2
    console.log(totalPairs)
    if (!this.pairsGuessed) {
      return false
    } if (this.pairsGuessed === totalPairs) {
      return true
    } else {
      return false
    }
  }
}
