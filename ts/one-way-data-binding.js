let dataBlob = {
  movie: 'Iron Man',
  quote: 'They say that the best weapon is the one you never have to fire.'
}

const quoteData = new Proxy(dataBlob, {
  set: (target, property, value) => {
    target[property] = value;
    quoteNode.render(dataBlob)
  }
})

const quotes = [
  "What is the point of owning a race car if you can't drive it?",
  "Give me a scotch, I'm starving.",
  "I'm a huge fan of the way you lose control and turn into an enormous green rage monster.",
  "I already told you, I don't want to join your super secret boy band.",
  "You know, it's times like these when I realize what a superhero I am."
]

const quoteNode = document.querySelector('.js-bound-update');

quoteNode.template = quoteNode.innerHTML;

quoteNode.render = function render(data) {
  this.innerHTML = this.template.replace(/\{\{\s?(\w+)\s?\}\}/g, (match, v) => {
    return data[v] || ''
  })
}

window.setInterval(() => {
  const quoteNum = Math.floor(Math.random() * quotes.length - 1)
  quoteData.quote = quotes[quoteNum]
})
