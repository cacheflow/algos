function Car(model, year, miles) {
  this.model = model; 
  this.year = year; 
  this.miles = miles; 
}

Car.prototype.toString = function() {
  return this.model + " has done " + this.miles + " miles"
}

var civic = new Car('Honda Civic ', 2009, 2000)
var accord = new Car('Honda Accord ', 1984, 2000)

console.log(civic.toString())
console.log(accord.toString())