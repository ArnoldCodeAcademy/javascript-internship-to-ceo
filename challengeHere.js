// Solution
let array = [1, 2, 3];

rotateRight(array);

console.log(array);

function rotateRight(array)
{
    let last = array.pop();
    array.unshift(last);
}
// EXPLANATION in README.MD
