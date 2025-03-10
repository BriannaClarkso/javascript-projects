//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.


// Part One: Reverse Characters

function reverseCharacters(stringToReverse){

    if (typeof stringToReverse == 'number'){
        
        let turnToString = stringToReverse.toString();
        let splitString = turnToString.split("");
        let reverseString = splitString.reverse();
        let joinString = reverseString .join("");

        return Number(joinString)

    } else {
        let myChar = stringToReverse.split("").reverse().join("");
        return myChar;
    }

};

let myVariableName = 12345;

console.log(reverseCharacters(myVariableName));


function arrayReversal(arrayToChange){

    let emptyArray = [];

    for(let i = 0; i < arrayToChange.length; i++){
        emptyArray[i] = reverseCharacters(arrayToChange[i])
    }

}


// Part Three: Complete Reversal

// 1. Define and initialize an empty array.
// 2. Loop through the old array.
// 3. For each element in the old array, call reverseCharacters to flip the characters or digits.
// 4. Add the reversed string (or number) to the array defined in part ‘a’.
// 5. Return the final, reversed array.
// 6. Be sure to print the results from each test case in order to verify your code.

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

// Bonus Missions

// 1. Have a clear, descriptive name like funPhrase.
// 2. Retrieve only the last character from strings with lengths of 3 or less.
// 3. Retrieve only the first 3 characters from strings with lengths larger than 3.
// 4. Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the second blank with the original string.

// Test Function

// 1. Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// 2. Call your function and print the returned phrase.

// Area of rectangle equal to length x width

// 1. Define a function with the required parameters to calculate the area of a rectangle.
// 2. The function should return the area, NOT print it.
// 3. Call your area function by passing in two arguments - the length and width.
// 4. If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
// 5. Use a template literal to print, “The area is ____ cm^2.”
