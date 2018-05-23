class Employee {
  constructor(name, discount) {
    this.name = name,
    this.discount = 10
  }
}


let employee = new Employee('alex', 10)

class CashRegister {
  constructor() {
    this.total = 0;
    this.lastTransAmount = 0;
  }

  add(name, cost = 0, quantity = 1) {
      console.log('Added ', name, 'with a cost of ', cost)
      this.total += (cost * quantity)
      console.log('Total is now ', this.total)
      this.lastTransAmount = cost
  }
  voidLastTransaction() {
    this.total -= this.lastTransAmount
    this.lastTransAmount = 0
  }
  removeItem(cost) {
    if(this.total > 0) {
      this.total -= cost
    }
  }

  getTotal() {
    return this.total
  }

  applyDiscount(employee) {
    this.total -= (this.total * employee.discount) / 100
  }
}

let c = new CashRegister()
c.add('Berries', 3.0, 3)
c.applyDiscount(employee)
console.log(c.getTotal())
