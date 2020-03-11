

// Problem description
/*
Given two strings, find the number of common characters between them.
*/

// Example 
/*
For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

*/

function commonCharacterCount(s1, s2) {
    // Itero el mas largo de los dos string y 
    let holder = {}
    let output = 0;

    Array.from(s1).forEach((item, key) => {
        if (holder[item] !== undefined) {
            holder[item] += 1;
        } else {
            holder[item] = 1;
        }
    });

    Array.from(s2).forEach((item, key) => {
        if (holder[item] !== undefined && holder[item] > 0) {
            holder[item] -= 1;
            output += 1;
        }
    });

    return Object.keys(holder).length
}


console.log(
    commonCharacterCount(
        "zzzz",
        "zzzzzzz"
    )
);




// The best way to do its


// function commonCharacterCount(s1, s2) {
//     for (var i = 0; i < s1.length; i++) {
//         s2 = s2.replace(s1[i], "!");
//     }
//     return s2.replace(/[^!]/g, "").length;
// }
