// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55,1,1001));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Sam',
    cities: ['bakersfield', 'olympia', 'new york'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in '+city);
    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }


    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
};

console.log(multiplier.multiply());


