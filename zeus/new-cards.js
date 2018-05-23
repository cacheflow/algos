const cardWeights = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'J'];
const cardTypes = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const cards = [];


const createCard = (type, weight) => {
  return {type, weight}
}


const buildDeck = (cardWeights, cardTypes) => {
  cardTypes.forEach((type) => {
    cardWeights.forEach((weight) => {
      cards.push(createCard(type, weight))
    })
  })
}




const shuffleDeck = (cards, count) => {

  for(var i = 0; i < 100; i++) {
    let getRandomIndex = () => Math.floor(Math.random() * (0, 51) - 1 + 1)
    console.log(getRandomIndex)
    let randomCard = cards[getRandomIndex()]
    if(cards[i]) {
      currentCard = cards[i]
      cards[i] = randomCard
      cards[getRandomIndex()] = cards[i]
    }
  }
}

buildDeck(cardWeights, cardTypes)

shuffleDeck(cards, 100)

// console.log(cards)
