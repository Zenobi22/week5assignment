class Cars {                   //created class to list different makes and models of cars
    constructor(make,model) {
      this.make = make;
      this.model = model;
    }

    describe() {
        return `${this.model} is made by ${this.make}.`;
    }
}

class Car_Type {            //created this class to the type of car ex: electric,gas,hybrid.
    constructor(model1) {
        this.model1 = model1;
        this.type = [];
    }

    addCars(Cars) {
        if (Cars instanceof Cars) {
          this.type.push(Cars);  
        } else {
          throw new Error('You can only add an instance of Cars. Argument is not a car: ${Cars}')
        }
    }

    describe() {
      return `${this.cars} is a {this.type.length} fully electric.`;
    }
}

class Menu {                //created class for the menu
    constructor() {
      this.car = [];
      this.selectedCar = null;
    }

    start() {            //created selections for menu using switch
      let selection = this.showMainMenuOptions();
      while (selection != 0) {
        switch (selection) {
          case '1':
            this.createCars();
            break;
          case '2':
            this.viewCars();
            break;
          case '3':
            this.deleteCars();
            break;
          case '4':
            this.displayCars();
            break;
          default:
              selection = 0;  
        }
        
        selection = this.showMainMenueOptions();
      }
      
      alert('Have a nice day!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) add new car
        2) view cars
        3) delete car
        4) display all cars
        `);
    }
// I was trying to create menu options for user to add,delete,etc.
    showCarsMenuOptions(carinfo) {
        return prompt(`
        0) back
        1) add car
        2) delete car
        ---------------
        ${carsInfo}
        `);
    }

    displayCars() {               // became a bit lost at this point. not sure how to correct error on line 31 & 116.
        let carsString = '';
        for (let i = 0; i < this.Cars.length; i++) {
            carsString += + ') ' + this.cars[i].model + '\n';
        }
        alert(carString);
    }

    addCars() {
        let car = prompt('Enter name of car:');
        this.cars.push(new Car_Type(Cars));
    }

    viewCars() { 
      let index = prompt('Enter the index of the car you want to view:');
      if (index > -1 && index < this.cars.length) {
        this.selectedCars = this.cars[index];
        
      for (let i = 0; i < this.selectedCars.type.length; i++) {
        description += i + ') ' + this.selectedCars.type.length[i].model
         + ' - ' + this.selectedCars.type[i].position + '\n';
      }

      let selection = this.showCarsMenuOptions(description);
      switch (selection) {
        case '1':
          this.addCars();
          break;
        case '2':
          this.deleteCar();
          break;
      }
    }
}