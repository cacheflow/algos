class Node {
  constructor() {
    this.keys = new Map();
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
    else if(!node.keys.has(word[0])){
      node.keys.set(word[0], new Node())
      this.add(word.substr(1), node.keys.get(word[0]))
    }
    else {
      this.add(word.substr(1), node.keys.get(word[0]))
    }
  }

  print() {
    return this.collectAllWords(this.root, "", []);
  }

  search(word) {
    let arr = []
    let recurse = (node, str) => {
      if(node.isEnd()) {
        console.log("heloo")
        arr.push(str)
      }
      if(node.keys.has(word[0])) {
        let w = node.keys.get(word[0])
        for(let letter of w.keys.keys()) {
          console.log(str)
          recurse(w.keys.get(letter), str.concat(letter))
        }
      }
    }
    recurse(this.root, "")
    console.log(arr)
  }

  collectAllWords(node, str, arr) {
    let recurse = (node, str) => {
      if(node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          recurse(node.keys.get(letter), str.concat(letter), arr);
        };
      }
      if(node.isEnd()) {
        arr.push(str)
      }
      else {
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

t.add('intelligence')
t.search('cat')


// console.log(t.root.keys.get('i'))
