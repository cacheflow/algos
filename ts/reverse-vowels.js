class Stack {
  constructor() {
    this.data = {}
    this.index = 0
  }

  push(data) {
    this.data[++this.index] = data
  }

  pop() {
    if(this.index) {
      let deletedData = this.data[this.index]
      delete this.data[this.index]
      --this.index
      return deletedData
    }
    throw new Error("Nothing to pop off")
  }

  peek() {
    return this.data[this.index]
  }

  toJson() {
    return this.data
  }

  empty() {
    return this.index === 0
  }
}





let reverseVowels = (s) => {
  let arr = s.split('')
  let isVowel = (l) => l === 'a' || l === 'A' || l === 'e' || l === 'E' || l === 'I' || l === 'i' || l === 'o' || l === 'O' || l === 'u' || l === 'U'
  let start = 0
  let end = arr.length - 1
  while(start <= end) {
    let firstChar = arr[start]
    let lastChar = arr[end]
    while(start < end && isVowel(firstChar) ) {
      start++
    }
    while(start < end && isVowel(lastChar) ) {
      end--
    }
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
  return arr.join('')
}

console.log(reverseVowels("Leetcode"))
