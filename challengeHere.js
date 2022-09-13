// Solution
let array = [1, 2, 3, 4, 5];
rotateLeft(array);
console.log(array);

function rotateLeft(array)
{
    let first = array.shift();
    array.push(first);
}
// EXPLANATION in README.MD
