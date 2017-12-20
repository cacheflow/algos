var mySingleton = (function() {
  var instance; 

  function init() {
    function privateMethod() {
      console.log("I am private")
    }

    var privateVariable = "I'm also private";

    var privateRandomNumber = Math.random();

    return {
      publicMethod: function() {
        console.log('the publican can see me')
      },

      publicProperty: "I am also public".

      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance
    }
  }
})();

var myBadSingleton = (function() {
  var instance; 

  function init() {
    var privateRandomNumber = Math.random();

    return {
      getRandomNumber: function() {
        return privateRandomNumber
      }
    };
  };

  return {
    getInstance: function() {
      instance = init()
      return instance;
    }
  }
})()

let singleA = mySingleton.getInstance()
let singleB = mySingleton.getInstance()

console.log(singleA.getRandomNumber() === singleB.getRandomNumber())