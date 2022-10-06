// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
 // returning a function that tests if value greater than base 
    return function (value) {
        if (base == value ){
          return false; 
          // using if statements to determine if value is less than base
        }  if (value < base){
          return false; 
          // executing else statement if previous blocks were not executed 
        } else {
          return true;
        }
      }
   
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    

    return function(value){
    // returning a function that tests if value is less than base 
        if (base == value ){
            return false; 
            // using if statements to determine if value is less than base
          }  if (value > base){
            return false; 
            // executing else statement if previous blocks were not executed 
          } else {
            return true;
          }
        }

    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * needs to be case insensitve 
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){ //Alex 
// return true if the string starts with the StartsWith character 
   // creating an if else statement to test the parameter string using to upperCase and toLowerCase to make it case insensitve
       if (startsWith.toUpperCase() === string[0] || startsWith.toLowerCase() === string[0]){
                return true; 
    }   else { 
        return false; 
    }
    
    
    // YOUR CODE ABOVE HERE //
}

}
/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){ //Alex 
        // return true if the string starts with the ends With character 
           // creating an if else statement to test the parameter string using to upperCase and toLowerCase to make it case insensitve
        // using string.length - 1 to access the last character of the string 
           if (endsWith.toUpperCase() === string[string.length - 1] || endsWith.toLowerCase() === string[string.length - 1]){
                        return true; 
            }   else { 
                return false; 
            }
    
        }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE // // modify is a fucntion that will modify a single string 
    

    return function(modify){


for (let i = 0; i <= strings.length; i++){

    strings.push(modify[i]); 
}

    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) { // test is a function that will test a single string true, false 
    // YOUR CODE BELOW HERE //
    
    
    function test(strings){

        

    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
