class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'silver';
  }
}

class Truck {
  constructor(options) {
    this.state = options.stats || 'used';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'blue';
  }
}

class VehicleFactory {
  constructor() {
    this.vehicleClass = Car
  }

  createVehicle(options) {
    if(options.vehicleType === 'car') {
      this.vehicleClass = Car;
    }
    else {
      this.vehicleClass = Truck;
    }
    return this.vehicleClass.new(options)
  }
}

const carFactory = new VehicleFactory();

const car = carFactory.createVehicle({
  vehicleType: 'car',
  color: 'yellow',
  doors: 6
})