// Solution #14
let fibbonacci0 = 0;
console.log(fibbonacci0);

let fibonacci1 = 1;
console.log(fibonacci1);

for(let i = 2; i < 10; i++)
{
    let fibonacci = fibonacci1 + fibbonacci0;
    console.log(fibonacci);

    fibbonacci0 = fibonacci1;
    fibonacci1 = fibonacci;
}
// EXPLANATION in README.MD
