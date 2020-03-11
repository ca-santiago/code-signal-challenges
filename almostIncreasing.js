/* Defining the Problem

Given a sequence of integers as an array, determine whether it is possible to obtain 
a strictly increasing sequence by removing no more than one element from the array.


// Example 

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.


*/

// This is my solution

function almostIncreasingSequence(seq) {
    var bad = 0
    for (var i = 1; i < seq.length; i++) {
        if (seq[i] <= seq[i - 1]) {
            bad++
            if (bad > 1) return false
            if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false
        }
    }
    return true
}

console.log(
    almostIncreasingSequence([10, 2, 1, 2])
);




// The best solution i found 

