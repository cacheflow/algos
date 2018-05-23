let cards = ["Spades", "Hearts", "Diamonds", "Clubs"]
let cardTypes = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

function BuildDeck(cards, cardTypes) {
  let deck = []

  cards.forEach((c) => {
    cardTypes.forEach((ct) => {
      deck.push({card: c, type: ct})
    })
  })
  return deck
}


function shuffleDeck(count) {
  let deck = BuildDeck(cards, cardTypes)
  let oldDeck = deck.slice(0)
  let random = Math.floor(Math.random() * deck.length - 1)

  for(var i = deck.length - 1; i > 0; i--) {
    let randIndex = Math.floor(Math.random() * i + 1)
    let currentCard = deck[i]
    let randomCard = deck[randIndex]
    deck[randIndex] = deck[i]
    deck[i] = randomCard
  }
  let isShuffled = deck.every((curr, i) => {
    return curr === oldDeck[i]
  })
  return !isShuffled
}



console.log(shuffleDeck(100))
