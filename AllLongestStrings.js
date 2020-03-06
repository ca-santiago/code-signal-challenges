/**
 * INSTRUCTIONS
 * Given an array of strings, return another array containing all of its longest strings.

    For inputArray = ["aba", "aa", "ad", "vcd", "aba"], 
    the output should be

    allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

 */



function allLongestStrings(inputArray) {
    let output = [inputArray[0]];
    for (let i = 1; i < inputArray.length; i++) if (inputArray[i].length > output[0].length)
        output = [inputArray[i]];
    else if (inputArray[i].length === output[0].length) output.push(inputArray[i])

    return output;
}


console.log(
    allLongestStrings(["abc",
        "eeee",
        "abcd",
        "dcd"])
);


// THIS IS THE BEST WAY I FOUND IN CODEPEN

/**
     function allLongestStrings(inputArray) {
        'use strict';
        let maxSize = Math.max(...inputArray.map(x => x.length));
        return inputArray.filter(x => x.length === maxSize);
    }
 */
