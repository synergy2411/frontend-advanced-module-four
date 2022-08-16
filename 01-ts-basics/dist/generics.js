"use strict";
function addAtBeginning(num, arr) {
    return [num, ...arr];
}
const numberArray = addAtBeginning(10, [9, 8, 7, 6]);
const stringArray = addAtBeginning("A", ["B", "C", "D"]);
// stringArray[0].
// numberArray[0].
// const numArray = addAtBeginning(4, [3,4,6,7])
