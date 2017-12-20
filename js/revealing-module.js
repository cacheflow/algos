const rmp = (function() {
  let privateVar, privateMethod; 

  privateVar = 0; 

  privateMethod = (foo) =>{
    console.log(foo)
  }

  return {
    myPublicVar: 'foo',

    myPublicFunction: function(bar) {
      privateVar++
    },

    privateMethod(barr)
  }
})()

let basketModule = (function() {
  let basket = []

  function doSomethingPrivate() {

  }

  function doSomethingElsePrivate() {

  }

  return {
    addItem: function(values) {
      basket.push(values)
    }

    getItemCount: function() {
      return basket.length
    }

    getTotal: function() {
      let q = this.getItemCount()
      let p = 0;
      while(q--) {
        p += basket[q].price;
      }
      return p
    }
  }
})