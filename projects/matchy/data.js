/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// creating variable named animal, assigned it empty object 
var animal = {}; 
// 
animal.species = "reptile"; 
animal["name"] = "";
animal.noises = []; 
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; 
noises[0] = "hiss";
noises.push('slither');
noises.push("rattle");
noises.push('growl');

console.log(noises.length); 
console.log(noises.lenghth - 1); 
console.log(noises); 
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises.push("dont bite"); 
console.log(animal); 
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; 
animals.push(animal); 

var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']}; 
var dog = {species: 'mammal', name: 'blake', noises: ['ruff', 'bark', 'woof', 'growl']}; 
var owl = {species: 'bird', name: 'howie', noises: ['hoot', 'howl', 'cacaw', 'meep']}; 

animals.push(duck); 
animals.push(dog); 
animals.push(owl); 

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// chosing the array datatstructure 
var friends = []; 

function getRandom(animal){

  return Math.floor(Math.random() * animal.length);

}
getRandom(animals);
var num = getRandom(animals);
friends.push(animals[num].name); 
console.log(friends);

for(let i = 0; i < animals.length; i++){
  animals[i].friends = friends; 
}




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}