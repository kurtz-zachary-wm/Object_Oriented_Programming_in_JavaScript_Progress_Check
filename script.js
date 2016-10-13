//Animal constructor, this will become the prototype for th parent class of all //Animals
var Animal = function(name, maxAge, age, color) {
    this.maxAge = maxAge;
    this.age = age;
    this.name = name;
    this.color = color;
};

// encapsulates a method to display any Animal
Animal.prototype.displayAnimal = function() {
    document.write("<input type='text' size='100' value=\'" + this.name +
        ": age " + this.age +
        ": max age = " + this.maxAge + " Color " + this.color + "\'><br><br>");
};

// override the parent launchVehicle method for a Animal
Animal.prototype.animalSound = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "noise\n";
    document.getElementById(this.name).innerHTML = output;
};

// define a constructor for a subclass of Animal
function Dog(name, maxAge, age, color, nbrTeeth) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Animal.call(this, name, maxAge, age, color);
    // set the subclass specific properties
    this.nbrTeeth = nbrTeeth;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Dog.prototype = Object.create(Animal.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Dog.prototype.constructor = Dog;

// override the parent displayVehicle method for a Dog
Dog.prototype.displayAnimal = function() {
    document.write("<input type='text' size='100' value=\'" + this.name +
        ": age " + this.age +
        ": max age = " + this.maxAge + " animal color " + this.color +
        ", current age " + this.age  + " ," +
        this.nbrTeeth + " teeth "  + "\'><br><br>");
    this.animalSound();
};
// override the parent launchVehicle method for a Car
Dog.prototype.animalSound = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "Bark\n";
    document.getElementById(this.name).innerHTML = output;
};

//define a constructor for a subclass of Animal
function Cow(name, maxAge, age, color, nbrBells) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Animal.call(this, name, maxAge, age, color);
    // set the subclass specific properties
    this.nbrBells = nbrBells;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Cow.prototype = Object.create(Animal.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Cow.prototype.constructor = Cow;

// override the parent displayVehicle method for a Car
Cow.prototype.displayAnimal = function() {
    document.write("<input type='text' size='100' value=\'" + this.name +
        ": age " + this.age +
        ": max age = " + this.maxAge + " animal color " + this.color +
        ", current age " + this.age + " ," +
        this.nbrBells + " bells"  + "\'><br><br>");
    this.animalSound();
};

// override the parent launchVehicle method for a Car
Cow.prototype.animalSound = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "Moo\n";
    document.getElementById(this.name).innerHTML = output;
};

//define a constructor for a subclass of Animal
function Pig(name, maxAge, age, color, nbrSpots) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Animal.call(this, name, maxAge, age, color);
    // set the subclass specific properties
    this.nbrSpots = nbrSpots;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Pig.prototype = Object.create(Animal.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Pig.prototype.constructor = Pig;

// override the parent displayVehicle method for a Car
Pig.prototype.displayAnimal = function() {
    document.write("<input type='text' size='100' value=\'" + this.name +
        ": age " + this.age +
        ": max age = " + this.maxAge + " " + this.color +
        ", current age " + this.age  + " ," +
        this.nbrSpots + " spots "  + "\'><br><br>");
    this.animalSound();
};
// override the parent launchVehicle method for a Car
Pig.prototype.animalSound = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "Oink!\n";
    document.getElementById(this.name).innerHTML = output;
};

//define a constructor for a subclass of Animal
function Cat(name, maxAge, age, color, nbrClaws) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Animal.call(this, name, maxAge, age, color);
    // set the subclass specific properties
    this.nbrClaws = nbrClaws;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Cat.prototype = Object.create(Animal.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Cat.prototype.constructor = Cat;

// override the parent displayVehicle method for a Car
Cat.prototype.displayAnimal = function() {
    document.write("<input type='text' size='100' value=\'" + this.name +
        ": age " + this.age +
        ": max age = " + this.maxAge + " animal color " + this.color +
        ", current age " + this.age  + " ," +
        this.nbrClaws + " claws "  + "\'><br><br>");
    this.animalSound();
};
// override the parent launchVehicle method for a Car
Pig.prototype.animalSound = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "Meow!\n";
    document.getElementById(this.name).innerHTML = output;
};




function main() {
    //Instantiate an array to hold vehicles
    var animalArray = [];
    //Populate the vehicle array with objects and subclass objects
    animalArray[0] = new Animal('Healthy', 50, 5, 'animal', 'black');
    animalArray[1] = new Dog('Rebel', 40, 2, 'black and white', 20);
    animalArray[2] = new Cow('Rocket', 35, 10, 'black and white', 4);
    animalArray[3] = new Pig('Porky', 200, 5, 'pink', 10);
    animalArray[4] = new Cat('Blacky', 40, 2, 'black', 10);

    for (var i = 0; i < animalArray.length; i++){
        animalArray[i].displayAnimal();
    }
};
