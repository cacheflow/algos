//The key to a singleton is that you want to cache an internal 
//representation of the class 

class Singleton {
  constructor() {
    this.instance = ''
  }

  init() {
    const privateMethod = () => {
      console.log("I am private")
    }
    const privateVar = 'I am also private';
    const privateRandomNumber = Math.random();

    return {
      publicMethod: () => {
        console.log('the public can see me')
      },
      publicProperty: 'I am also public',
      getRandomNumber: () => {
        return privateRandomNumber;
      }
    }
  }
  create() {
    return {
      getInstance: () => {
        console.log('this is ', _this)
        if (!_this.instance) {
          _this.instance = init();
        }
        return _this.instance;
      }
    }
  }
}

let singleA = new Singleton
let singleB = new Singleton

//working on creating a singleton using es6 classes
// console.log(singleA.getRandomNumber() === singleB.getRandomNumber())