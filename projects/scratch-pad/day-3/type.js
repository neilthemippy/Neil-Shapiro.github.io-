// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE // check to see if there is a method you can already use? check google 
    // using Array.isArray method to return if the parameter is true or false 
     
    if (Array.isArray(value) === true){ 
                return true; 
        } else {
        // checking with Array.isArray to revert to false if array is not array   
            return false; 
        }
  
 
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) { // 
    // YOUR CODE BELOW HERE //
    if (typeof value === 'object' && value !== null 
           // && Array.isArray(value) !== true && value !== instanceof Date
            ){

            return true; 
    } else { 
        
        return false ; 
    }

     

    
    // determine if typeof value is an object && value is not an array 
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
  /*  if (Array.isArray(value) === true || typeof value === 'object' && typeof value !== "null" && value !== instanceof Date){
        return true;
    } else if ({ 
        return false; 
    }
*/
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // using if statement to pass value through the function to check the type of function 
    if (Array.isArray(value)){ 
        return 'array'; 
        // checking if value is date 
    } if (value instanceof Date){
        return 'date'; 
        // checking if value is null 
    } if (value === null){
        return 'null'; 
        // return else statement if value has not been previously excecuted for above if statements 
    } else {
        return typeof value;
    }


    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
