class Node {
  constructor() {
    this.children = new Map();
    this.end = false;
  }

  setEnd() {
    this.end = true
  }

  isEnd() {
    return this.end
  }
}


class Trie {
  constructor() {
    this.root = new Node()
  }

  add(word, node = this.root) {
    if(word.length === 0) {
      //we're done adding the node to the trie
      node.setEnd();
      return;
    }
    else if(!node.children.has(word[0])){
      node.children.set(word[0], new Node())
      let previousLetterOfWord = node.children.get(word[0])
      this.add(word.substr(1), previousLetterOfWord)
    }
    else {
      let previousLetterOfWord = node.children.get(word[0])
      this.add(word.substr(1), previousLetterOfWord)
    }
  }

  print() {
    return this.collectAllWords(this.root, "", []);
  }

  predictWord(str, node = this.root) {
    let predictions = [];
    let newStr = str
    let getMatchingWords = (prefix, newStr, n) => {
      if(n.children.has(prefix[0])) {
        let w = n.children.get(prefix[0])
        for(let letter of w.children.keys()) {
          console.log('new str is ', letter)
          getMatchingWords(letter, newStr.concat(letter), w)
        }
      }
    }
    console.log(predictions)
    return getMatchingWords(str, '', node)
  }

  search(word) {
    let arr = []
    let recurse = (node, str) => {
      if(node.isEnd()) {
        arr.push(str)
      }
      if(node.children.has(word[0])) {
        let w = node.children.get(word[0])
        for(let letter of w.children.keys()) {
          console.log(str)
          recurse(w.children.get(letter), str.concat(letter))
        }
      }
    }
    recurse(this.root, "")
    return arr
  }

  collectAllWords(node, str, arr) {
    let recurse = (node, str) => {
      if(node.children.size != 0) {
        for (let letter of node.children.children()) {
          recurse(node.children.get(letter), str.concat(letter), arr);
        };
      }
      if(node.isEnd()) {
        arr.push(str)
      }
      else {
        //pushes all prefixes to the array
        str.length > 0 ? arr.push(str) : undefined;
        return;
      };
    }
    recurse(node, str)
    return arr.length > 0 ? arr : false;
  };
}


let t = new Trie()


t.add('cat')

t.add('dog')
t.add('dime')

t.add('intelligence')

console.log(t.predictWord('do'))


// console.log(t.root.children.get('i'))
