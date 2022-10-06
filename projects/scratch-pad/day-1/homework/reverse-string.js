// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(String) {
    // YOUR CODE GOES BELOW HERE //
    // I: the function takes the string as datatype 
// O: the output of the parameter, string, will be the string in reverse order
// C: the function should be aware of any inputs that are not strings 
// E: the function should be prepared for any data type that is not a string 
  //setting reversed string to an empty string 
   let reversedString = '';
     //using a for loop to loop through the characters starting at the last character looping to the start
   for (var i = String.length - 1; i >= 0; i--){
    //using addition assignment to add the String loop to the empty string
     reversedString += String[i]; 
   }
   return reversedString;
 }
 reverseString("hello"); 
 //logging the string of hello to the console
 console.log(reverseString("hello"));
    
    
    
    // YOUR CODE GOES ABOVE HERE //





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}