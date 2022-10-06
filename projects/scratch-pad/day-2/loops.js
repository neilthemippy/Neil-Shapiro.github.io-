// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //

//looping through the values of the array function 

  for (var i = 0; i <= array.length - 1; i++){
// logging the values of the array to the console
    console.log(array[i]); 
  }
  

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //looping through the value of the array in a decrement 
  for(var i = array.length - 1; i >= 0; i--){ 
//logging the values to the console
    console.log(array[i]); 
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // create ouput array 
  var keys = []; 

// iterate thorugh object using for in loop 
  //return output array 
for(var key in object){
//key => currrent key 

//push key into 
keys.push(key); 

} 
  
return keys; 

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //creating output object  
  //creating a loop to iterate through the object keys 
  for (var key in object){ 
    //logging the key to the console
    console.log(key); 
  
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // creating an out put array 
  var array = []; 
// creating var key to loop through object 
for( var key in object){
// pushing the object key/value pairs into output array 
  array.push(object[key]); 
}
  // returning new array 
return array; 
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object){ 
    console.log(object[key]); 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // creating for loop that will iterate through the length of the key: value pairs
  var array = []; 
// creating new output array 
for( var key in object){
// creating loop that will iterate through the object 
  array.push(object[key]); 
} // push key value pairs into output array 
  // returning length of output array 
return array.length; 
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // create output array 
  var values = []; 
  //iterate using for in loop 
  for (var key in object){ 
    // push the current value into values 
  values.push(object[key]); 
  } // iterating backwards through output array 
  for(var i = values.length - 1; i >= 0; i--){
    console.log(values[i]); 
  }
  
  
// iterate through values in reverse 
  
  // YOUR CODE ABOVE HERE //
}

// iterate through values in reverse 
//print each item in reverse to the console 



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
