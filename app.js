// **** Num 1: re-write the code into an es2015 version
// function createInstructor(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// };

const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
};

// **** Num 2: computed property names: write an es2015 version
// var favoriteNumber = 42;

// var instructor = {
//     firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That's my favorite!"
};

// **** Num3: Object Methods: re-write in es2015
// var instructor2 = {
//     firstName: "Colt",
//     sayHi: function () {
//         return "Hi!";
//     },
//     sayBye: function () {
//         return this.firstName + " says bye!";
//     }
// };

const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return 'Hi!'
    },
    sayBye() {
        return this.firstName + " says bye-bye!";
    }
};

// **************** Num 4: createAnimalFunction: 
// Write a function which generates an animal object. The function should accepts 3 arguments:
// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered. 

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"
// -->


function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
};

const dog = createAnimal('dog', 'bark', 'wooof!');