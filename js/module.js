var myModule = {
  myProperty: "someValue", 

  myConfig: {
    useCaching: true, 
    language: 'en'
  },

  saySomething: () => { 
    console.log("We are here")
  },

  reportMyConfig: function() {
    console.log("wow we are reporting ", this.myConfig)
  },

  updateMyConfig: (newConfig) => {
    if(typeof newConfig === 'object') {
      this.myConfig = newConfig;
      console.log(this.myConfig.language)
    }
  }

}



//The Module pattern encapsulates "privacy", state and organization using closures. 
//It provides a way of wrapping a mix of public and private methods and variables, protecting pieces 
//from leaking into the global scope and accidentally colliding with another developer's interface. 
//With this pattern, only a public API is returned, keeping everything else within the closure private.

var testModule = (function() {
  var counter = 0; 

  return {
    incrementCounter: function() {
      return counter++
    }, 

    resetCounter: function() {
      console.log("counter value prior to reset: ", counter)
      counter = 0
    }
  }
})()

testModule.incrementCounter()
testModule.resetCounter()

var myNamespace = (function() {
  var myPrivaterVar, myPrivaterMethod; 

  myPrivaterVar = 0 

  myPrivaterMethod = function(foo) {
    console.log(foo)
  }

  return {
    myPublicVar: 'fooo', 

    myPublicFunction: function(bar) {
      myPrivaterVar++;

      myPrivaterMethod(bar)
    }
  }
})()

var basketModule = (function() {
  var basket = []; 

  function doSomethingPrivate() {

  }

  function doSomethingElsePrivate() {

  }

  return {
    addItem: function(values) {
      basket.push(values)
    },

    getItemCount: function() {
      return basket.length;
    },

    doSomething: doSomethingPrivate,

    getTotal: function() {
      var q = this.getItemCount(),
      p = 0
      while(q--) {
        p+= basket[q].price
      }
      return p
    }
  }
})()

basketModule.addItem({
  item: "bread",
  price: 0.5
})

basketModule.addItem({
  item: "butter",
  price: 0.5
})

console.log(basketModule.getItemCount())
console.log(basketModule.getTotal())