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
      this.add(word.substr(1), node.children.get(word[0]))
    }
    else {
      this.add(word.substr(1), node.children.get(word[0]))
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


// console.log(t.root.children.get('i'))
