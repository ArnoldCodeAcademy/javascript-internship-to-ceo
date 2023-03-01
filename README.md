# JavaScript Challenges: Beginner to Master

54 JavaScript Challenges for Beginners To Become A Master

<img src="https://user-images.githubusercontent.com/91799402/164074513-7fed1ca2-41b1-4143-bf8c-2ecd7818c1d0.png" alt="JavaScritp Challenge Banner" width="300px" >
<hr>

# Introduction & Tutorial

If you are new to the challenge or don’t know how to start, [this](https://arnoldcode.com/wp-content/uploads/2021/04/Challenge-Template.zip) is a template you can download and take part in my coding challenge JavaScript – Internship to CEO.

<hr>

# Template
(Download the Challenge-Template)(https://arnoldcode.com/wp-content/uploads/2021/04/Challenge-Template.zip)

Just download the template, write your code into the challengeHere.js open the index.html in chrome or any other browser.

# Open Console to Inspect Your Code Output

- Chrome: Hit F12-Key to open console.
- Safari: Option + ⌘ + C.
- Firefox: Hit CTRL + SHIFT + K to open the Web console (COMMAND + SHIFT + K on Macs).
- Internet Explorer: Hit F12-Key to open console.

# Help & Detailed Solutions
Each commit has the solution inside.

To get help [contact me](mailto:info@arnoldcode.com) via e-mail.

<hr>


# Want To Learn Web Development Fast & Easy?

[Build A Game UI and an Online Resume with HTML & CSS](https://www.udemy.com/course/build-a-game-ui-and-an-online-resume-with-html-css/)

Beginners Welcome
Where and How to Start
Perfect Resources
Save A Lot of Time
Create Your First Websites
Explained in Detail, But Simple

<hr>

# Stay Informed: Latest Changes and News in Web Development

[Check out My Online Articles About the Latest News and Changes in Web Development](https://medium.com/@arnoldcode)

[![img_2.png](img_2.png)](https://medium.com/@arnoldcode)

# Challenge Overview

1. [Print numbers from 1 to 10 with a for-loop.](#challenge01)
2. [Print the odd numbers below than 99 with a for-loop.](#challenge02)
3. [Print a multiplication table with 6 with for-loop.](#challenge03)
4. [Print all the multiplication tables with numbers from 1 to 10 with a for-loop.](#challenge04)
5. [Calculate the sum of numbers from 1 to 24 with a for-loop.](#challenge05)
6. [Calculate 9! a for-loop.](#challenge06)
7. [Calculate the sum of odd numbers greater than 9 and less than 30 a for-loop](#challenge07)
8. [Create a function that will convert from Celsius to Fahrenheit. Convert 0 degree Celsius](#challenge08)
9. [Create a function that will convert from Fahrenheit to Celsius. Convert -38 degree Fahrenheit](#challenge09)
10. [Calculate the sum of numbers in an array of numbers](#challenge10)
11. [Calculate the average of the numbers in an array of numbers](#challenge11)
12. [Create a function that receives an array of numbers and returns an array containing only the positive numbers](#challenge12)
13. [Find the maximum number in an array of numbers.](#challenge13)
14. [Print the first 10 Fibonacci numbers without recursion](#challenge14)
15. [Create a function that will find the nth Fibonacci number using recursion](#challenge15)
16. [Create a function that will return a Boolean specifying if a number is prime](#challenge16)
17. [Calculate the sum of digits of a positive integer number](#challenge17)
18. [Print the first 99 prime numbers.](#challenge18)
19. [Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”](#challenge19)
20. [Rotate an array to the left 1 position.](#challenge20)
21. [Rotate an array to the right 1 position](#challenge21)
22. [Reverse a string. The string „JavaScript with ArnoldCode is the best!"](#challenge22--pro-solution-)
23. [Create a function that will merge two arrays and return the result as a new array.](#challenge23--pro-solution-)
24. [Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both](#challenge24--pro-solution-)
25. [Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second](#challenge25--pro-solution-)
26. [Create a function that will receive an array of numbers as argument and will return a new array with distinct elements](#challenge26--pro-solution-) 
27. [Calculate the sum of first 99 prime numbers](#challenge27--pro-solution-)
28. [Print the distance between the first 99 prime numbers](#challenge28) 
29. [Create a function that will return the number of words in a text](#challenge29--pro-solution-)
30. [Create a function that will capitalize the first letter of each word in a text](#challenge30--pro-solution-)
31. [Calculate the sum of numbers received in a comma delimited string.](#challenge31--pro-solution-) 
32. [Create a function that will return an array with every word of a text.](#challenge32--pro-solution-)
33. [Create a function to convert a CSV text to a “bi-dimensional” array.](#challenge33--pro-solution-)
34. [Create a function that will convert a string in an array containing the ASCII codes of each character.](#challenge34--pro-solution-)  
35. [Create a function that will convert an array containing ASCII codes in a string.](#challenge35--pro-solution-)
36. [Implement the Caesar cypher.](#challenge36--pro-solution-)
37. [Implement the bubble sort algorithm for an array of numbers.](#challenge37--pro-solution-)
38. 08.03.2023 
39. 15.03.2023 
40. 22.03.2023 
41. 29.03.2023 
42. 05.04.2023 
43. Mid 2023 
44. Mid 2023 
45. Mid 2023 
46. Mid 2023
47. Mid 2023 
48. Mid 2023 
49. Mid 2023 
50. Mid 2023 
51. Mid 2023 
52. Mid 2023 
53. Mid 2023 
54. Mid 2023 

# Challenge01 
## Print numbers from 1 to 10 with a for-loop.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 01"</summary>
  
  ```javascript
  // Solution #01
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

// Get into the Community https://www.facebook.com/groups/webdevconquerors me on Facebook and don’t miss the latest Challenge!

/* EXPLANATION

  You need to print out ten numbers to the console prompt.

  A `for-loop` is the perfect tool for this job!

  You create a loop with a running index of `i` with the starting value of `1`.

  The loop will stop once `i` reaches the value of `11`, so when `i` equals `10`, the loop will execute the last time because you created the condition of    `i <= 10`.

  The running index will be increased by `1` every iteration. `i++` is the corresponding statement for that. It is the short form for `i = i+1`.

  Inside the loop you got your statement of `console.log(i);` which prints out, whatever is inside the brace, to the console window.

 */

// Get into the Community https://www.facebook.com/groups/webdevconquerors me on Facebook and don’t miss the latest Challenge!

</details>

# Challenge02 
## Print the odd numbers below than 99 with a for-loop.

<details>
  <summary>Spoiler "Solution-Explanation For Challenge 02"</summary>
  
  
```javascript
  // Solution #01
for (let i = 1; i <= 99; i += 2) {
    console.log(i);
}
```
Get into the Community https://www.facebook.com/groups/webdevconquerors me on Facebook and don’t miss the latest Challenge!

### EXPLANATION - Way #1

    To get the expected result, you start the running index i with the value of 1 and have in mind that in between every odd number comes an even number.

    Therefore, you increase your running index i by 2 every iteration with i += 2.

    You set the condition to <=99 because you only want to print out odd numbers below 99, that means the odd numbers between 1 to 97.

    Inside the loop you got your statement of console.log(i); which prints out, whatever is inside the brace, to the console window.

    In your case the wanted odd number.



// Solution #02

```javascript
for (let i = 1; i <= 99; i += 2) {
    console.log(i);
}
```
                       
Get into the Community https://www.facebook.com/groups/webdevconquerors me on Facebook and don’t miss the latest Challenge!

### EXPLANATION - Way #2

    When starting from 97, which is an odd number respectively, and iterate backwards, you almost got it.

    To get every odd number, remember yourself that in between every odd number comes an even number.

    Jumping over them by decreasing the running index `i` to get every odd number.

    You have to change the conditions for the `for-loop`.

    First `i` starts at `97`, then your condition has to be `i > 0`. Not `i >= 0`, otherwise you would print out the even number `0` (Yes `0` is an even number).

    The running index gets decreased by `2` after every iteration with `i -= 2`.

    Inside the loop you got your statement of `console.log(i);` which prints out, whatever is inside the brace, to the console window.

    In your case the wanted odd number.
</details>

# Challenge03
## Print a multiplication table with 6 with for-loop.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 03"</summary>
  
  ```javascript
for(let i = 1; i <= 10; i++)
{
    let row = "6 * " + i + " = " + 6 * i;
    console.log(row);
}
```
![image](https://user-images.githubusercontent.com/91799402/164618806-190d4b75-5d5d-4ee6-a087-9881f926e4e8.png)
The console output of the solution
                      
Explanation
The row of six goes from 6 to 60. Therefore you will need a for-loop that iterates 10 times. You are a bit familiar with loops now (since you made challenge #01 and #02) and you know the rules of a for-loop.

The variable row is your printed statement every iteration. To get the multiplication table of six, you just multiply the base number of 6 with the next value of the iteration process. The row of six starts with 6*1, then 6*2, and then 6*3, and so on…

To print a decent table, you have to display the entire entry as a term. So 6 * 1 = 6 as code is "6 * " + i + " = " 6 * i . You need to have the quotation marks here, because you want a string as result. If you don’t use the quotation marks the “compiler” would then complain about the equal sign. Leaving out also the equal sign and the + sign in front of it would result in the following line:

let row = 6 *  + i + 6 * i;
Running the program then will print this:
![image](https://user-images.githubusercontent.com/91799402/164619117-4fead118-8b72-420a-9e6f-a0a38f853125.png)
Result of misused syntax

You would then have created a completely different term and therefore also a completely different output.

Be sure, that you know what you want to accomplish in order to use the right data types and statements.

</details>

# Challenge04
## Print all the multiplication tables with numbers from 1 to 10 with a for-loop.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 04"</summary>

  ```javascript
for(let i = 1; i <= 10; i++)
{
    printTable(i);
    console.log("");
}

function printTable(n)
{
    for(let i = 1; i <= 10; i++)
    {
        let row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}
```
A function is the best choice to accomplish this task.

If you aren’t familiar with functions. <b>No reason to worry.</b>

But first, if you accomplished this task with 10 different for loops - Your solution isn’t wrong.

It can be optimized to enter the next level of your skills: <b>10 for-loops aren’t a good thing.</b> 

Besides avoiding for loops for this solution [here are 10 principles that will level up your expertise](https://medium.com/next-level-source-code/do-you-follow-these-10-principles-for-good-programmers-1445727af447).

###Coming back to our solution - Code repetition is bad practice. 

<b>A rule of thumb:</b> If two parts of source code look the same in 50% of their lines, you've got doubled code.

Avoiding code repetition means having reusable tools.

A function suits that perfectly. A function provides input parameters. 
These are the settings for the function to operate with. 

Inside the body of the function, you have the reusable code pieces that operate slightly differently, 
depending on what you’ve put into the function as a parameter.

###Now really back to the solution: 
Having a `for`-loop to with a function call to `printTable()` inside will execute the function 
10 times since we configured the head of the `for`-loop to do it 10 times.

The function `printTable()` has an input parameter of `n`. The for-loop passes the variable `i` every iteration, 
respectively, the values of `1` to `10`.

You can now assume what the function must do. Right, the body is almost identical to the previous challenge, 
where you just print out one multiplication table. You changed the hard-coded `6` to an `n` and 
linked this variable to the input parameter of the function. That results in a function that 
prints out the multiplication table of the number we pass as a parameter.

Because the function does it for any number and once per call, we can just call it 
ten times with corresponding parameters and we got our solution right away!

![Part of the Solution’s Console Printout](res/png/img.png)

The line of `console.log(""")`; just prints out an empty line as a divider for the multiplication tables.
</details>

# Challenge05
## Calculate the sum of numbers from 1 to 24 with a for-loop.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 05"</summary>

  ```javascript
let sum = 0;


for(let i = 1; i <= 24; i++)
{
    sum += i;
}

console.log(sum);
```
For the diversity, another challenge, but a simpler one! 

But that doesn’t mean you can switch off your brain 😉

You simply can’t put the accumulated value of sum inside the loop and print it to the console.

It would then end up with 24 print-out- statements.

You have to declare and initialize the variable of `sum` (and please use `let` here! Why?! [In-Depth Explanation - You will remember until your retirement why & where to use VAR, LET and CONST](https://javascript.plainenglish.io/javascript-const-vs-var-vs-let-a-comprehensive-guide-for-all-time-d6d836c8bbd7))
outside of the loop in order to print it out afterward.

If you decide to declare `sum` inside the loop, it would be initialized every iteration. But it must hold the actual accumulated value.

Furthermore, if you declared it inside the loop it would be out of our reach when we want to access it outside the loop. This is called a scope, declaring a variable inside a class/function/loop, makes it to a local variable which can’t be accessed from the outside (The article below addresses this in detail).

And this is the console output: ![Console print-out of the Solution.](res/png/solution05.png)

</details>

# Challenge06
## Calculate 9! a for-loop.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 06"</summary>

```javascript
let factorial = 1;

for(let i = 1; i <= 9; i++)
{
    factorial *= i;
}

console.log(factorial);
```
To create the factorial of 9 you do almost the same steps as in challenge #05.

The difference lies in the loop body.

Last time you used this statement (`sum = sum+=i`) to gather the accumulated sum.

Knowing a bit about mathematics means you are aware of the fact that a factorial 
is nothing more than a chained multiplication.

So 9! is nothing more than `9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 9!`. 

Together with the knowledge about `for`-loops you can draw your advantage out of this by using the running index
of `i` to create the factorial.

To get your desired result, you iterate exact 9 times!

![console-printout](res/png/solution06.png)
</details>

# Challenge07
## Calculate the sum of odd numbers greater than 9 and less than 30 a for-loop.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 07"</summary>

```javascript
let sum = 0;

for(let i = 11; i <= 30; i += 2)
{
    sum += i;
}

console.log(sum);
```
To accomplish your task, you should remember [Challenge #02](#challenge02). 
Because back then, the task was to print out every odd number below 99. 
That means you created a `for` loop with an increment of `2`. 
After each iteration to get only odd numbers when starting with an odd number. 
In your case with `11`.

Remembering [Challenge #05](#challenge05)? This one makes you also happy again. 
There you had the task to create the `sum` of the numbers from `1` to `24`.
The same concept applies to this task. 
You add up every odd number (`n`) `n > 9` and `n < 30` to a `sum`.

After the loop has finished, you print it to the console:

![console-printout](res/png/solution07.png)

Accumulated value printed out to the console (Sum of all odd numbers >9 & <30)

</details>

# Challenge08
## Create a function that will convert from Celsius to Fahrenheit. Convert 0 degree Celsius.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 08"</summary>

```javascript
function convertCelsiusToFahrenheit(number)
{
    return number * 1.8 + 32;
}

let degreeFahrenheit = convertCelsiusToFahrenheit(0);
console.log(degreeFahrenheit);
```
### How to convert Celsius to Fahrenheit

The temperature T in degrees Fahrenheit (°F) is equal to the temperature T in degrees Celsius (°C) times 9/5 plus 32:

![Conversion from °Celsius to °Fahrenheit](res/png/solution8-1.jpg)

or with decimals

![Conversion from °Celsius to °Fahrenheit Example](res/png/solution8-2.jpg)

### Example Conversion of 20 degrees Celsius to ?? degrees Fahrenheit:

![Conversion of 20°C to ?? °F](res/png/solution8-3.jpg)

### Accomplishing The Task

To accomplish your task, you need to return a number calculated with `1.8` and add `32`.

This is done with the parameter inside `convertCelsiusToFahrenheit()`.

The last step is to return the converted number and printing it out.

The console will print out `32` when you put in the number `0`.

![Solution In Console](res/png/solution8-4.png)

</details>

# Challenge09
## Create a function that will convert from Fahrenheit to Celsius. Convert -38 degree Fahrenheit.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 09"</summary>

```javascript
function convertCelsiusToFahrenheit(number)
{
    return number * 1.8 + 32;
}

let degreeFahrenheit = convertCelsiusToFahrenheit(0);
console.log(degreeFahrenheit);
```
### How to convert Celsius to Fahrenheit

The temperature T in degrees Fahrenheit (°F) is equal to the temperature T in degrees Celsius (°C) times 9/5 plus 32:

![Conversion from °Celsius to °Fahrenheit](res/png/solution9-1.jpg)

or 

![Conversion from °Celsius to °Fahrenheit Example](res/png/solution9-2.jpg)

### Example Conversion of 20 degrees Celsius to ?? degrees Fahrenheit:

![Conversion of 20°C to ?? °F](res/png/solution9-3.jpg)

### Accomplishing The Task

To accomplish your task, you need to reverse the conversion of degrees to Fahrenheit. 
This means we first subtract 32 and then divide by 1.8.

This is done in the `convertFahrenheitToCelsius`-function.

Just call the function, pass the number as argument and print the returned value out. <b>And you are done!</b>

The console prints out `-38.888888888888886` when we put in the number -38.

Because this is the point where Celsius and Fahrenheit have the same amount.

</details>

# Challenge10
## Calculate the sum of numbers in an array of numbers. The array: [1, 9, -19, 3, 5, 3, 7, 14, 91].

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 10"</summary>

```javascript
function summarizeArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

let array = [1, 9, -19, 3, 5, 3, 7, 14, 91]
let sum = summarizeArray(array);
console.log(sum);
```

To accomplish our task, you need to iterate over the array and build the sum out of each element.

Since you aren’t so experienced right now, you should not use the `reduce()` method. 
Instead, write basic operations like above using a `for` loop.

After the loop has finished, you print the sum to the console:\
![Console Print Out of sum](res/png/solution10.png)

</details>

# Challenge11
## Calculate the average of the numbers in an array of numbers. The array: [2, 5, 17, 81, 9].

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 11"</summary>

```javascript
function averageArray(array) {
    let length = array.length;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += array[i];
    }

    return sum / length;
}

let array = [2, 5, 17, 81, 9];
let average = averageArray(array);

console.log("Average: ", average);
```

**How to calculate an average**\
A calculated “central” value of a set of numbers.

To calculate it: add up all the numbers, then divide by the total amount of numbers.

Example: what is the average of 2, 7 and 9?\
Add all numbers: 2 + 7 + 9 = 18
Divide by numbers count (2, 7, 9 are 3 numbers) \
18 ÷ 3 = 6 

So the average is 6. (Also called the Arithmetic Mean.)

**Accomplishing your Goal**

To accomplish your task, you create a function called `averageArray()'\
that accepts a parameter. This will be your array you hand to the function.

You need to get the length of the array for a `for`-loop.\
Creating a sum and then dividing by the length gets the average.

Just return the number and print it to the console, and you are done!

![Console Print Out of average](res/png/solution11.png)

</details>

# Challenge12
## Create a function that receives an array of numbers and returns an array containing only the positive numbers. The array: [-65, 11, -5, 1, -19, 45, 19, 0, 1].

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 12"</summary>

```javascript
function getPositives(array) {
    let tempArray = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element >= 0) {
            tempArray.push(element);
        }
    }

    return tempArray;
}

let array = [-65, 11, -5, 1, -19, 45, 19, 0, 1];
let positives = getPositives(array);

console.log(positives);
```

To accomplish your task, you need to create a function called that only returns positive numbers.\
In this case I called it `getPositives()` and passed in the array.

Inside the body, you need to create a new array (`tempArray`).\
This one will keep only the positives numbers.

The next step is to loop over the array you passed to the function `array`.
Check for each element if it is positive by checking it against greater than equal 0 ( `>=0`).

If `TRUE`, add it to the newly created `tempArray`.
If `FALSE`, don't add it to `tempArray`. 

Once, you are done iterating, checking and adding, just return the `tempArray` and print it to the console.\
Done!


![Console Print Out of All Positive Numbers](res/png/solution12.png)

</details>

# Challenge13
## Create a function that receives an array of numbers and returns an array containing only the positive numbers. The array: [-65, 11, -5, 1, -19, 45, 19, 0, 1].

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 13"</summary>

```javascript
function findMax(array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

let array = [-21, 113, -34, 1, -9, 5, 99, 1, 0];
let max = findMax(array);
console.log("Max: ", max);
```

To accomplish your task, you create a function called `findMax()` and pass in your array.

Inside the body, you need to create a variable referencing your found maximum value.

You set the variable `max` to the first element of you array. 

Since this it the first maximum existing. You didn’t check any other so far.

The next step is to loop over the array and check if the element you are currently looking at is greater than your current `max` value.

If so, replace it to the newly found maximum element of array.

Once, you are done iterating, comparing, and adding, just return the found maximum and print it to the consol.

You are done!

![Console Print Out of Max Number](res/png/solution13.png)

</details>

# Challenge14
## Print the first 10 Fibonacci numbers without recursion. Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 14"</summary>

```javascript
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
```

You start with the creation of the `for` loop. 

Make sure to define the loop runs from `2` to `10`  in order to get the first 10 numbers. 

Start with the `0` followed by `1` and you only need 8 more numbers to complete.

Any number `n` of the Fibonacci series is created by adding up the number `n-1` with the number `n-2`.

To get the third number, we need to have number `n-1` and `n-2`. 

Reaching `n = 3`, means the number will be `2` and `1` of the series.

The equation is therefore: `n = n – 1 + n – 2;`

Which results into: `2 = 1 + 0;`. The 3rd number of the Fibonacci series.

Then you need to switch the `n – 1` and `n – 2` to the newly created ones to go further in our Fibonacci series. 

E voilá, do it as long as you want to get all numbers for the Fibonacci series.

The complete outcome of the console:

![The complete outcome of the console](res/png/solution14.png)

</details>

# Challenge15
## Create a function that will find the nth Fibonacci number using recursion. Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, … . Use nth = 14

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 15"</summary>

```javascript
function findFibonacci(number)
{
    if (number === 0)
        return 0;

    if (number === 1)
        return 1;

    return findFibonacci(number - 1) + findFibonacci(number - 2);
}

let fibonacciSeries = findFibonacci(14);

console.log(fibonacciSeries);
```

The Fibonacci numbers are the numbers in the following integer sequence.

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……`

In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation:

![Fibonacci Mathematical Terms](res/png/solution15-1.jpg)

![Fibonacci Examples](res/png/solution15-2.jpg)

</details>

# Challenge16
## Create a function that will return a Boolean specifying if a number is prime. Test with 1,5,6,7,9,11,13 & 27.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 16"</summary>

```javascript
function isPrime(number)
{
    if (number < 2)
        return false;

    if (number == 2)
        return true;

    let maxDiv = Math.sqrt(number);

    for(let i = 2; i <= maxDiv; i++)
    {
        if (number % i == 0)
        {
            return false;
        }
    }

    return true;
}
```
## What is a prime number in maths?

Prime numbers are special numbers, greater than 1, that have exactly two factors, themselves and 1. 

19 is a prime number. It can only be divided by 1 and 19. 

9 is not a prime number.

## Solution

In your solution, you first check if the passed number is below 2. 

Then you already checked against any number below 2 being no prime number.

If the number is equal to 2, then it is a prime number and you can return `true` already.

If any number passed both checks and you are still inside your function, then you'll need find the maximum divisor by getting the square root of our passed number.

With a for loop, you check if the number is remainderless dividable by the iterator of i. 

If the remainder is 0, then you definitely have another valid calculation instead of only being able to divide a number with 1 and itself to be a prime number. 

Therefore, you are returning `false`.

Testifying the given numbers results into this printout.

![Console Printout for the testing numbers](res/png/solution16.png)
</details>

# Challenge17
## Calculate the sum of digits of a positive integer number. The integer 1235321.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 17"</summary>

```javascript
function sumDigits(number)
{
    let string = number.toString();
    let sum = 0;

    for(let char of string)
    {
        let digit = parseInt(char);
        sum += digit;
    }

    return sum;
}

let sum = sumDigits(1235321);

console.log("Sum: ", sum);
```

The solution is pretty straightforward. 

You need to separate the digits to loop over them and add them to a sum.

You can do it by a conversion to a string because this is nothing more than a char array under the hood.

You can take advantage of this knowledge by iterating over the array with a for-of-loop.

While looping you add up the sum and finally returning the sum to the caller.

This is the printout after the sum was created:

![Console Printout for Adding Up The Digits](res/png/solution17.png)
</details>

# Challenge18
## Print the first 99 prime numbers.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 18"</summary>

```javascript
printPrimes(99);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
    let n = 0;
    let i = 2;

    while(n < nPrimes)
    {
        if (isPrime(i))
        {
            console.log(n, " --> ", i);
            n++;
        }

        i++;
    }
}


// Returns true if a number is prime
function isPrime(number)
{
    if (number < 2)
        return false;

    if (number == 2)
        return true;

    let maxDiv = Math.sqrt(number);

    for(let i = 2; i <= maxDiv; i++)
    {
        if (number % i == 0)
        {
            return false;
        }
    }

    return true;
}
```

The function `printPrimes(nPrimes)` is your looping function that will print out the number of primes you pass in.

We stick to `99` for this challenge.

The next step is to set `n` to `0`, because you want to start with the 0th prime number and set `i` to `2`,
because we know the first prime number must be `2`.

Then you loop over the condition of `n < nPrimes` and check if the value of `i` is a prime number by actually calling your second function: `isPrime(number)`.

This function is all about checking if the number is below `2`; no prime number. Then if it is equal to `2`; a prime number. 

For every other case, you apply the commonly known rules for prime numbers. Being divideable only by itself or `1`.

The for loop checks if you have a `maxdivisor` that results in a valid integer division with the result of `0`.

If so, it isn’t a prime number; referring back to the commonly known rules for prime numbers.

If the loop does not return `false` and run through successfully, the function returns `true`, and the while loop of `printPrimes` continues.

Below is the printout for the first `18` numbers. 

The list goes on until `99`. The output means the 0th prime number is `2`, then the 1st prime number is `3`, and so on…

![Console Printout for PrimeNumbers](res/png/solution18.png))
</details>

# Challenge19
## Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”.

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 19"</summary>

```javascript
console.log(getPrimes(10, 100));


function getPrimes(nPrimes, startAt)
{
    let array = [];

    let i = startAt;

    while(array.length < nPrimes)
    {
        if (isPrime(i))
        {
            array.push(i);
        }

        i++;
    }

    return array;
}

// Returns true if a number is prime
function isPrime(number)
{
    if (number < 2)
        return false;

    if (number == 2)
        return true;

    let maxDiv = Math.sqrt(number);

    for(let i = 2; i <= maxDiv; i++)
    {
        if (number % i == 0)
        {
            return false;
        }
    }

    return true;
}
```

The function `getPrimes` has to accept two parameters. 
1. `nPrimes` which decides the number of prime numbers you want to be printed
2. `startAt` which decides where you start to calculate the prime numbers

You create an empty array and set your runningIndex `i` equal to the `startAt` variable.

A while loop makes a continuous call to the `isPrime` function and passes in the number you want to check. 

This is being done as long as your array is below the `nPrimes` variable.

Once you have the predestined number of primes, you will skip the while loop and return the array with prime numbers.

I have already explained the `isPrime` function in [Challenge #18](#challenge18).

If you call this function with `console.log(getPrimes(10, 100));` then the following will be the output.

![Console Printout for PrimeNumbers](res/png/solution19.png)

</details>

# Challenge20
## Rotate an array to the left 1 position. E.g. [1, 2, 3, 4, 5] -> [ 2, 3, 4, 5, 1 ] | [1, 2, 4, 5] -> [ 2, 4, 5, 1 ].

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 20"</summary>

```javascript
let array = [1, 2, 3, 4, 5];
rotateLeft(array);
console.log(array);

function rotateLeft(array)
{
    let first = array.shift();
    array.push(first);
}
```

You can achieve this challenge’s goal quite easily by using the `shift()` and the `push()` method for arrays. 

The `shift()` method removes the first element of an array and returns it. 

If you store it now into a temporarily variable (in this case `first`) then you can use the `push()` method to push it as the last element of an array.

If you want to dig deeper into `shift()` and `push()` and JavaScript + Web Development take my [JavaScript Course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course), 
where I introduce you also to all kinds of array methods (there are plenty of them and they are very useful to achieve massive results in a short amount of code and time).

<b>[A discount awaits you! Just subscribe to my newsletter.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

The output for the code above is:

![Console Printout for Rotating 1 Left](res/png/solution20.png)

</details>


# Challenge21
## Rotate an array to the right 1 position. E.g. [1, 2, 3] -> [ 3, 1, 2 ] | [1, 2, 4, 6, 3] -> [ 3, 1, 2, 4, 6 ].

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 21"</summary>

```javascript
let array = [1, 2, 3];

rotateRight(array);

console.log(array);

function rotateRight(array)
{
    let last = array.pop();
    array.unshift(last);
}
```

You can achieve the challenge’s goal quite easily by using the opposites of `shift()` and the `push()` method for arrays.

This time you have to use the `pop()` method which removes the last element of an array and returns it.

If you store it now into a variable (in this case `last`) then you can use the `unshift()` method to push it as the 
first element of an array.


If you want to dig deeper into `shift()` and `push()` and JavaScript + Web Development take my [JavaScript Course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course),
where I introduce you also to all kinds of array methods (there are plenty of them and they are very useful to achieve massive results in a short amount of code and time).

<b>[A discount awaits you! Just subscribe to my newsletter.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

The output for the code above is:

![Console Printout for Rotating 1 Right](res/png/solution21.png)

</details>


# Challenge22 + Pro Solution 😉
## Reverse a string. The string „JavaScript with ArnoldCode is the best!“

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 22"</summary>

```javascript
// Solution with for - loops
let reversedString = reverseString('JavaScript with ArnoldCode is the best!');
console.log(reversedString);

function reverseString(string)
{
    let string2 = "";

    for(let i = string.length - 1; i >= 0; i--)
    {
        string2 += string[i];
    }

    return string2;
}
````
## Solution for pro developers!
```typescript
reversedString = reverseString('JavaScript with ArnoldCode is the best!');
console.log(reversedString);

function reverseString(string)
{
    return string.split('').reverse().join('')
}
```

## Explanation For-Loops

The function `reverseString` creates an empty string `string2` where the reversed string will be stored to.

A simple `for` loop covers the tasks of reversing your string.

It does it by decrementing the running index of `i` from the `string.length` towards `0` and pushes beginning from the last element of the passed `string` until the first into `string2`.

*This is possible due to the fact that a string is in fact an arrays of characters.*

After the for loop, the function just returns your newly reversed `string` of `string2`.
![Console Printout To Solution 22](res/png/solution22.png)

If you want to dig deeper into strings, arrays and  their methods check out the pro solution.

## Explanation Pro Solution

You can achieve the challenge’s goal quite easily by using 3 advanced methods for strings and arrays:
- [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) - Splits up a string by a given character template (in this case `''`; any char)
- [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - Reverses an order of elements inside an array
- [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - Combines all elements into a single string

So the order of actions for success is:
1. Splitting the string into characters
2. Reversing the order of characters
3. Combining all reversed characters into a single string

If you want to become a [Web Developer you want to take my examples](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course), explanations and story telling by breaking the 4th dimensions and save you a lot of time & effort 😉

[A discount and 26 Cheatsheets await you! Just subscribe to my newsletter.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img.png)](https://www.udemy.com/user/arnold-abraham-3/)

</details>

# Challenge23 + Pro Solution 😉
## Create a function that will merge two arrays and return the result as a new array. The two arrays: [9, 8, 7, 6],  [1, 2, 3, 4].

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 23"</summary>

```javascript
// Solution with for - loops
let array1 = [9, 8, 7, 6];
let array2 = [1, 2, 3, 4];

let mergedArrays = mergeArrays(array1, array2);
console.log(mergedArrays);

function mergeArrays(array1, array2)
{
    let tempArray = [];

    for(let element of array1)
    {
        tempArray.push(element);
    }

    for(let element of array2)
    {
        tempArray.push(element);
    }

    return tempArray;
}
````
## Solution for pro developers!
```typescript
let mergedArraysPro = mergeArrays(array1, array2);
console.log(mergedArraysPro);

function mergeArrays(array1, array2)
{
    return array1.concat(array2)
}
```

## Explanation For-Loop Solution

The function `mergeArrays` has two inputs (`array1` and `array2`). 

It also does create an empty array `tempArray` where the combined and merged array will be stored to.

This time you need two `for` loops to cover the merging process. 

You simply push all elements of the first array to the variable `tempArray`.

When this is done, you approach the second array and push also each element into `tempArray`.

Once you’ve iterated over both arrays and all elements are stored into `tempArray` you just do the return and already have it.
A merged array.

![The Result in the Console](res/png/solution23.png)

*This isn’t the best method you can use but a suitable one, if you are just starting out.* 

It is a good way to practice loops, but in terms of functionality, clean code, and extensibility you should take my JavaScript Course, where I introduce you also to all kinds of array methods to write maintainable and scalable code – a must-have for every JavaScript Developer.

If you want to dig deeper into strings, arrays and  their methods check out the pro solution.

## Explanation Pro Solution

You can achieve the challenge’s goal quite easily by using 1 advanced method for arrays:
- [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

If you want to become a [Web Developer you want to take my examples](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course), explanations and story telling by breaking the 4th dimensions and save you a lot of time & effort 😉

[A discount and 26 Cheatsheets await you! Just subscribe to my newsletter.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img.png)](https://www.udemy.com/user/arnold-abraham-3/)

</details>

# Challenge24 + Pro Solution 😉
## Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both. The two arrays: [1, 9, 17, 15, 3, 9, 15] , [1, 9, 3, 2, 17]


<details>
    <summary>Spoiler "Solution-Explanation For Challenge 24"</summary>

```javascript
// Solution with for - loops
let array1 = [1, 9, 17, 15, 3, 9, 15];
let array2 = [1, 9, 3, 2, 17];

let exclusivelyMergedArray = mergeExclusive(array1, array2);
console.log(exclusivelyMergedArray);

function mergeExclusive(array1, array2)
{
    let tempArray = [];

    for(let element of array1)
    {
        if (!array2.includes(element))
        {
            tempArray.push(element);
        }
    }

    for(let element of array2)
    {
        if (!array1.includes(element))
        {
            tempArray.push(element);
        }
    }

    return tempArray;
}
````
## Solution for pro developers!
```javascript
let mergedArraysPro = mergeArrays(array1, array2);
console.log(mergedArraysPro);

function mergeArrays(array1, array2)
{
    return array1.filter(element => !array2.includes(element)).concat(array2.filter(element => !array1.includes(element)))
}
```

## Explanation For-Loop Solution

The function `mergeExclusive` has two inputs (`array1` and `array2`).

It also does create an empty array `tempArray` where the result array will be stored to.

You will need two `for` loops to cover the merging process.

You simply iterate over `array1` and push only those elements of the first array to the variable `tempArray` that are also in `array2`.

Then you repeat the process with `array2` and push only those elements into the result array that are also in `array1`. 

Once you’ve iterated over both arrays and all elements are stored into `tempArray` you just do the return and already have it.

An exclusively merged array.

![The Result in the Console](res/png/solution24.jpg)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

It is a good way to practice loops, but in terms of functionality, clean code, and extensibility you should take my JavaScript Course, where I introduce you also to all kinds of array methods to write maintainable and scalable code – a must-have for every JavaScript Developer.

If you want to dig deeper into strings, arrays and  their methods check out the pro solution.

## Explanation Pro Solution

You can achieve the challenge’s goal quite easily by combining several advanced method for arrays:
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
- [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

If you want to become a [Web Developer you want to take my examples](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course), explanations and story telling by breaking the 4th dimensions and save you a lot of time & effort 😉

[A discount and 26 Cheatsheets await you! Just subscribe to my newsletter.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img.png)](https://www.udemy.com/user/arnold-abraham-3/)

</details>

# Challenge25 + Pro Solution 😉
## Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second. The two arrays:  [12, 21, 34, 1, 35, 7, 19] , [-1, 7, 1, 61, 69].


<details>
    <summary>Spoiler "Solution-Explanation For Challenge 25"</summary>

```javascript
// Solution with for - loops
let array1= [12, 21, 34, 1, 35, 7, 19];
let array2 = [-1, 7, 1, 61, 69];

let leftMergedArray = mergeLeft(array1, array2);
console.log(leftMergedArray);

function mergeLeft(array1, array2)
{
    let tempArray = [];

    for(let element of array1)
    {
        if (!array2.includes(element))
        {
            tempArray.push(element);
        }
    }

    return tempArray;
}
````
## Solution for pro developers!
```javascript
let leftMergedArrayPro = mergeLeftPro(array1, array2);
console.log(leftMergedArrayPro);

function mergeLeftPro(array1, array2)
{
    return array1.filter(element => !array2.includes(element))
}
```

## Explanation For-Loop Solution

This challenge feels like easy holidays, doesn#t it?

It is like the one before, but only the first half if it.

The function `mergeLeft` has two inputs (`array1` and `array2`).

It also does create an empty array `tempArray` where the result array will be stored to.

You will need one `for` loop to cover the left-merging process.

You simply iterate over `array1` and push only those elements of the first array to the variable `tempArray` that are also not in `array2`.

Once you’ve iterated over `array1` and all elements are stored into `tempArray` you just do the return and already have it.

An exclusively merged array.

![The Result in the Console](res/png/solution25.jpg)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

It is a good way to practice loops, but in terms of functionality, clean code, and extensibility you should take my JavaScript Course, where I introduce you also to all kinds of array methods to write maintainable and scalable code – a must-have for every JavaScript Developer.

If you want to dig deeper into strings, arrays and  their methods check out the pro solution.

## Explanation Pro Solution

You can achieve this challenge’s goal also quite easily by combining several advanced method for arrays:
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
- [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

If you want to become a [Web Developer you want to take my examples](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course), explanations and story telling by breaking the 4th dimensions and save you a lot of time & effort 😉

[A discount and 26 Cheatsheets await you! Just subscribe to my newsletter.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img.png)](https://www.udemy.com/user/arnold-abraham-3/)

</details>

# Challenge26 + Pro Solution 😉
## Create a function that will receive an array of numbers as argument and will return a new array with distinct elements. The Array: 12, 12, 3, 6, -1, 21, 9, 7, 10, 12,6 ,- 69, -1, 100.


<details>
    <summary>Spoiler "Solution-Explanation For Challenge 26"</summary>

```javascript
let distinctElements = getDistinctElements([12, 12, 3, 6, -1, 21, 9, 7, 10, 12,6 ,- 69, -1, 100]);
console.log(distinctElements);

function getDistinctElements(array)
{
    let tempArray = [];

    for(let i = 0; i < array.length; i++)
    {
        if (!isInArray(array[i], tempArray))
        {
            tempArray.push(array[i]);
        }
    }

    return tempArray;
}

function isInArray(number, array)
{
    for(let i = 0; i < array.length; i++)
    {
        if (array[i] === number)
            return true;
    }

    return false;
}
````
## Solution for pro developers!
```javascript
console.log(getDistinctElementsPro([12, 12, 3, 6, -1, 21, 9, 7, 10, 12,6 ,- 69, -1, 100]))

function getDistinctElementsPro(array){
    return array.filter((v, i, a) => a.indexOf(v) === i);
}
```

## Explanation For-Loop Solution

You will need 2 functions here, otherwise it could fastly become a mess to comprehend afterward.

The overall solution is to iterate over the array you are passing into `getDistinctElements` and iterate over it with a `for`-loop.

The next step is to check for each element if it already exist in our newly created `tempArray`.

- If not: Add it
- If yes: skip it

You do this until you have checked each element and then return the `tempArray`.

E voilá.


![The Result in the Console](res/png/solution26.jpg)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

It is a good way to practice loops, but in terms of functionality, clean code, and extensibility you should take my JavaScript Course, where I introduce you to all kinds of array methods to write maintainable and scalable code – a must-have for every JavaScript Developer.

If you want to dig deeper into strings, arrays and  their methods check out the pro solution.

## Explanation Pro Solution

You can achieve this challenge’s goal also quite easily by combining several advanced method for arrays:
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
- [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

If you want to become a [Web Developer and want to profit from a huge time bonus to become a developer, take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course). Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount and 26 Cheatsheets awaits you! Just subscribe to my newsletter.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img.png)](https://www.udemy.com/user/arnold-abraham-3/)

</details>

# Challenge27 + Pro Solution 😉
## Calculate the sum of first 99 prime numbers.


<details>
    <summary>Spoiler "Solution-Explanation For Challenge 27"</summary>

```javascript
console.log("Sum of first ", 99, " primes is ", sumPrimes(99));

function sumPrimes(number)
{
    let foundPrimes = 0;
    let i = 2;
    let sum = 0;

    while(foundPrimes < number)
    {
        if (isPrime(i))
        {
            foundPrimes++;
            sum += i;
        }

        i++;
    }

    return sum;
}

// Returns true if number n is prime
function isPrime(number)
{
    if (number < 2)
        return false;

    if (number == 2)
        return true;

    let maxDiv = Math.sqrt(number);

    for(let i = 2; i <= maxDiv; i++)
    {
        if (number % i === 0)
        {
            return false;
        }
    }

    return true;
}
````
## Solution for pro developers!
```javascript
console.log("Sum of first " + 99 + "primes is" + sumOfNPrimes(99) + ". Calculated with Pro-Solution.");

function sumOfNPrimes(num) {
    return getNprimes(num).reduce((a, b) => a + b)
}

function getNprimes(n) {
    const primes = [];
    let i = 2

    while (primes.length < n) {
        if (isPrime(i)) {
            primes.push(i)
        }
        i++
    }
    return primes;
}
```

## Quick Knowledge Consolidation

"A prime number is a number which has just two factors: itself and 1. Or in other words it can be divided evenly only by itself and 1. For instance, 3 is a prime number because it can be divided evenly only by itself and one. On the other hand, 6 can be divided evenly by 1, 2, 3 and 6. Hence, the number 6 is not a prime number."
by [Math Basics: Prime Numbers](https://www.qsleap.com/gmat/resources/math-basics-prime-numbers#:~:text=A%20prime%20number%20is%20a,%2C%202%2C%203%20and%206.)

### Here are some divisibility rules for prime numbers:

- If the number is even, it will always be divisible by 2
- If the sum of the digits is divisible by 3, the number will be divisible by 3
- If the number ends with 5 or 0, it will be divisible by 5
- Double the last digit and subtract it from the rest of the number. If the answer is divisible by 7, the original number will be divisible by 7
- Add alternate digits and subtract it from the difference of the next sum of alternate digits, For instance, if the number is 574652, add 5+4+5=14 and 7+6+2=15. If the difference i.e. 1 is divisible by 11, then the number will be divisible by 11. In this case, clearly the number is not divisible by 11.

## Explanation For-Loop Solution

Also here, you will need 2 functions. Otherwise it could become hard to comprehend afterward.

The first function is `sumPrimes` to actually add each n prime number n. 

The second function `isPrime` that checks if the number in the argument is actually a prime and returns `true` or `false`.

### isPrime() in Detail

Accepts an argument called `number`. This function is not fail-safe. If you pass in a string, JavaScript will automatically try
to convert it to a number. With a boolean, you screw the entire program.

Anyways, the function makes an early exit if the number is below 2 (no prime) and also if the number is 2 (prime). 

If the argument passes both tests, you need to get the maximum divisor by getting the square-root.

`let maxDiv = Math.sqrt(number);`

Last check to determine if you passed a prime number or not is to iterate (beginning with 2) until you reach the max divisor.

If now the numbers is divided by any of the divisors without a fraction, it disqualifies itself and the function returns `false`.

Otherwise you got yourself a `true` prime number.

*Remember: If any other number except itself or 1 returns a division without any fraction, it isn't classified as prime number.*

### sumPrimes() in Detail

It accepts a limit of prime numbers you want to calculate the sum of.

It will always start at 2, because the first ever possible prime is 2.

This function needs 3 local variables:

- `foundPrimes`: holds a temporarily state about how many prime numbers we already got
- `i`: the current number to investigate for prime-qualities
- `sum`: result of the calculation (will be returned in the end)

The `while`-loop iterates until the passed argument of `number` matches the `foundPrimes` variable.

First it checks if the current starting number (held in `i`) is a a prime (done by calling the `isPrime()`-function).

If a prime number has been found, it increased the `foundPrimes` counter and adds the found number to the `sum`.

When the exit condition of the while loop returns false, it returns `sum` to the caller.

![The Result in the Console](res/png/solution27.jpg)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

It is a good way to practice loops, but in terms of functionality, clean code, and extensibility you should take my JavaScript Course, where I introduce you to all kinds of array methods to write maintainable and scalable code – a must-have for every JavaScript Developer.

If you want to dig deeper into strings, arrays and  their methods check out the pro solution.

## Explanation Pro Solution

You can achieve this challenge’s goal also quite easily by combining several advanced method for arrays:
- [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

If you want to become a [Web Developer and want to profit from a huge time bonus to become a developer, take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course). Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount and 26 Cheatsheets awaits you! Just subscribe to my newsletter.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img.png)](https://www.udemy.com/user/arnold-abraham-3/)

</details>

# Challenge28 
##  Print the distance between the first 99 prime numbers


<details>
    <summary>Spoiler "Solution-Explanation For Challenge 28"</summary>

```javascript
printDistances(99);

// Print distances between the first n prime numbers
function printDistances(n)
{
    let lastPrime = 2;
    let i = lastPrime + 1;
    let foundPrimes = 1;

    while(foundPrimes < n)
    {
        if (isPrime(i))
        {
            console.log(i - lastPrime, "\t", i, " - ", lastPrime);

            foundPrimes++;
            lastPrime = i;
        }

        i++;
    }
}

// Returns true if number n is prime
function isPrime(n)
{
    if (n < 2)
        return false;

    if (n == 2)
        return true;

    let maxDiv = Math.sqrt(n);

    for(let i = 2; i <= maxDiv; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }

    return true;
}

````
## Solution for pro developers!
```javascript
// TODO
```

## Quick Knowledge Consolidation

In case you don't know anything about Prime Numbers, check the [previous challenge with a detailed explanation](#challenge27--pro-solution-).

## Explanation For-Loop Solution

Also here, you will need 2 functions. Otherwise it could become hard to comprehend afterward.

The first function is `printDistances` to actually print the distances to the console.

The second function `isPrime` that checks if the number in the argument is actually a prime and returns `true` or `false`.

### isPrime() in Detail (same as in previous challenge)

Accepts an argument called `number`. This function is not fail-safe. If you pass in a string, JavaScript will automatically try
to convert it to a number. With a boolean, you screw the entire program.

Anyways, the function makes an early exit if the number is below 2 (no prime) and also if the number is 2 (prime).

If the argument passes both tests, you need to get the maximum divisor by getting the square-root.

`let maxDiv = Math.sqrt(number);`

Last check to determine if you passed a prime number or not is to iterate (beginning with 2) until you reach the max divisor.

If now the numbers is divided by any of the divisors without a fraction, it disqualifies itself and the function returns `false`.

Otherwise you got yourself a `true` prime number.

*Remember: If any other number except itself or 1 returns a division without any fraction, it isn't classified as prime number.*

### printPrimes() in Detail

This function accepts one parameter `n`. This is the upper bound where the function stops printing out distances.

It needs 3 local variables: 
- `lastPrime`: the last Prime number the function found
- `i`: the current number to investigate for prime-qualities
- `foundPrimes`: holds a temporarily state about how many Prime numbers we already got

The `while`-loop checks if `foundPrimes` is below the input parameter of `n`. The loop will continue as long as we haven't found 99 primes to fulfill this challenge.

Since the function gets the command to print the distances for 99 Prime numbers, the function needs to start at the lowest Prime (2) and check every number from there.

It does so by passing each number into the `isPrime()` function. 

If no Prime --> jump to next iteration
If Prime --> print out a statement that displays the following order `distance     current Prime "-" last Prime `. Increasing the 
counter of found Primes and setting the `lastPrime` to the currently found (`i`).

(compare solution picture)

(`\t` is an escape sequence for a tabulator-stop).


![The Result in the Console](res/png/solution28.jpg)

</details>

# Challenge29 + Pro Solution 😉
## Create a function that will return the number of words in a text. Use this text "Very good Sir! Just make sure you finish on the Bach, never finish on Debussy!"

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 29"</summary>

```javascript
const text = "Very good Sir! Just make sure you finish on the Bach, never finish on Debussy!"

const wordsCount = countWords(text);

console.log(wordsCount);

function countWords(text) {
    let wasSeparator = true;
    let words = 0;

    for (let character of text) {
        if (isSeparator(character)) {
            wasSeparator = true;
            continue;
        }

        if (wasSeparator) {
            words++;
            wasSeparator = false;
        }
    }

    return words;
}

function isSeparator(character) {
    const separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(character);
}
````
## Solution for pro developers!
```javascript
console.log(countWordsPro(text));

function countWordsPro(text){

    text = text.replace(/(^\s*)|(\s*$)/gi,"");
    text = text.replace(/[ ]{2,}/gi," ");

    return text.split(' ').length;
}
```

## Explanation For-Loop Solution

Again 2 functions are better:  & `.

- `countWords(text)` counts every word inside the text by iterating over each character
- `isSeparator(character)` checks for separator characters to know when when a word ends. 

The overall solution is to iterate over the text you pass into `countWords` and iterate over each character with a `for`-loop.

The next step is to check for each character if it is a separator character your `text`.

- If seperator: set boolean of `wasSeparator` to `true` and increase word count with `words++`and set it back to false for the next iteration
- If no seperator: skip rest of the loop by using `continue`

You do this until you have checked each character for the given text the `words`.

*Done!*

The `isSeparator` function has the separator characters stored in an array called `separators`. 
- [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

Each passed character will be checked if it matches any of the given elements of `separators`.

![The Result in the Console](res/png/solution29.jpg)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

If you want to dig deeper into professional coding in JavaScript check out the pro solution.

## Explanation Pro Solution

The Pro Solution uses [Regular Expressions](https://levelup.gitconnected.com/indiana-jones-and-the-universal-way-to-search-for-text-1901990f53ae). 

[Read this 5 min Article from me to learn the fundamentals and some professional tips & tricks.](https://levelup.gitconnected.com/indiana-jones-and-the-universal-way-to-search-for-text-1901990f53ae)

[Regular Expressions in JavaScript With Indiana Jones - 5 minutes to get down with regular expressions](https://levelup.gitconnected.com/indiana-jones-and-the-universal-way-to-search-for-text-1901990f53ae).

[![img.png](img.png)](https://levelup.gitconnected.com/indiana-jones-and-the-universal-way-to-search-for-text-1901990f53ae)


If you want to become a [Web Developer and want to profit from a huge time bonus to become a developer, take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course). Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount and 26 Cheatsheets awaits you! Just subscribe to my newsletter.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img.png)](https://www.udemy.com/user/arnold-abraham-3/)

</details>

# Challenge30 + Pro Solution 😉
## Create a function that will capitalize the first letter of each word in a text. The text: „javascript and arnold code academy are the best to me!"

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 30"</summary>

```javascript
console.log(capitalizeFirstLetter("javascript and arnold code academy are the best to me!"));

function capitalizeFirstLetter(text)
{
    let tempText = "";

    for(let i = 0; i < text.length; i++)
    {
        let currentCharacter = text[i];
        let previousCharacter = i > 0 ? text[i - 1] : " ";

        if (!isSeparator(currentCharacter) && isSeparator(previousCharacter))
        {
            currentCharacter = currentCharacter.toUpperCase();
        }

        tempText += currentCharacter;
    }

    return tempText;
}

function isSeparator(character)
{
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(character);
}
````
## Solution for pro developers!
```javascript
console.log(capitalizeFirstLetterPro("javascript and arnold code academy are the best to me!"))

function capitalizeFirstLetterPro(text) {
    return text.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ")
}
```

## Explanation For-Loop Solution

The rule to know how many functions you should create:

`One function has one purpose. And this purpose should be small.` This is part of the [SOLID-Principles every good developer must know](https://medium.com/arnoldcode-academy/unity-solid-s-single-responsibility-6707d9569e73).

Anyways, the solution involves the following 2 functions:

- `capitalizeFirstLetter(text)` checks every character to be the first of a word and capitalize if it is
- `isSeparator(character)` checks for separator characters to know when when a word ends

The overall solution is to iterate over the text you pass into `capitalizeFirstLetter` and iterate over each character with a `for`-loop.

The next step is to check a set of two characters:
- `previousCharacter`
- `currentCharacter` 

``` javascript
let currentCharacter = text[i];

let previousCharacter = i > 0 ? text[i - 1] : " ";
```
The first line is easy, but the second one that defines `previousCharacter` is a [Ternary-Operator](https://javascript.plainenglish.io/javascript-ecmascript-history-the-hidden-features-acb38af57be8)
and does the following: 
- If the expression before the `?` (`i > 0`) evaluates to `true` take `text[i-1]`
- If the expression before the `?` (`i > 0`) evaluates to `false` take `" "`

*Why?* Because `" "' is a separator and will capitalize the first word of the entire text :)

 
Only if this set has the following combination
- `previousCharacter` -> Is a separator
- `currentCharacter` -> is no separator
then it means we have the beginning of a word.

You do these double checks until you have checked each characters for the given text.

*Done!*

The `isSeparator` function has the separator characters stored in an array called `separators`.
- [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

Each passed character will be checked if it matches any of the given elements of `separators`.

![The Result in the Console](res/png/solution30.jpg)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

If you want to dig deeper into professional coding in JavaScript check out the pro solution.

## Explanation Pro Solution

To achieve the same result with prior JavaScript knowledge, I used some built-in functionality:

- [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) - The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
- [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) - The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
- [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

If you want to become a [Web Developer and want to profit from a huge time bonus to become a developer, take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course). Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount and 26 Cheatsheets awaits you! Just subscribe to my newsletter.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img.png)](https://www.udemy.com/user/arnold-abraham-3/)

</details>

# Challenge31 + Pro Solution 😉
## Calculate the sum of numbers received in a comma delimited string. The CSV string „1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9“


<details>
    <summary>Spoiler "Solution-Explanation For Challenge 31"</summary>

```javascript
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));


function sumCSV(string)
{
    let array = string.split(",");

    let sum = 0;

    for(let number of array)
    {
        sum += parseFloat(number);
    }

    return sum;
}
````
## Solution for pro developers!
```javascript
function sumCSVLikeAPro(string){
    return string.split(",").reduce((a, v) => parseFloat(a) + parseFloat(v));
}

```

## Explanation For-Loop Solution

With this challenge you can relax a bit and just need to write one function ;) 

`sumCSV` takes a `string` and converts it into an `array` by already using an advanced method of arrays (`split()`).

Yep, the time has come for you to learn them:
- [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) - The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

After that the function proceeds simply with the creation of the needed `sum` temporarily variable and processes it inside a  `for`-loop.

With the call of `parseFloat` the code transforms each string into a number and adds it to  `sum` until each element of the array has been processed by the for loop.

Lastly, return the `sum` variable to the caller and you are done.

![The Result in the Console](res/png/solution31.jpg)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

If you want to dig deeper into professional coding in JavaScript check out the pro solution.

## Explanation Pro Solution

To achieve the same result with prior JavaScript knowledge, I used some built-in functionality:

- [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) - The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
- [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Become a [Web Developer with a huge time saving journey and take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course).

Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount 26 Cheatsheets and vital Web Development Tips, Tricks and Insights await you! Subscribe here.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img2.jpg)](https://www.udemy.com/user/arnold-abraham-3/)

</details>


# Challenge32 + Pro Solution 😉
## Create a function that will return an array with every word of a text. Use the text "Learning to Code with Arnold Code Academy brings me joy."



<details>
    <summary>Spoiler "Solution-Explanation For Challenge 32"</summary>

```javascript
let text = "Learning to Code with Arnold Code Academy brings me joy.";

console.log(getWords(text));

function getWords(text)
{
    let startWord = -1;
    let array = [];

    for(let i = 0; i <= text.length; i++)
    {
        let character = i < text.length ? text[i] : " ";

        if (!isSeparator(character) && startWord < 0)
        {
            startWord = i;
        }

        if (isSeparator(character) && startWord >= 0)
        {
            let word = text.substring(startWord, i);
            array.push(word);

            startWord = -1;
        }
    }

    return array;
}

function isSeparator(character)
{
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
    return separators.includes(character);
}

````
## Solution for pro developers!
```javascript
console.log(getWordsPro(text));

function getWordsPro(text){

    text = text.replace(/(^\s*)|(\s*$)/gi,"");
    text = text.replace(/[ ]{2,}/gi," ");

    return text.split(' ').map(x => x);
}
```

## Explanation For-Loop Solution

The solution to this challenge is pretty similar to a previous challenge.

You will have 2 functions:
1. `getWords(text)` - returns the words in an array by calling the 2nd function
2. `isSeparator(character)` - returns `true` or `false` if the passed character is a seperator

Having these 2 functions is already the solution by iterating over each character of the string and check if it is a separator.

Once a character is identified as separator, the previous section must be a word and will be stored into the `array`.

When you iterated all characters, the `array` is returned.

The following picture shows the result.

![The Result in the Console](res/png/solution32.jpg)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

If you want to dig deeper into professional coding in JavaScript check out the pro solution.

## Explanation Pro Solution

To achieve the same result with prior JavaScript knowledge, I used some built-in functionality:

- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Become a [Web Developer with a huge time saving journey and take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course).

Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount 26 Cheatsheets and vital Web Development Tips, Tricks and Insights await you! Subscribe here.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img2.jpg)](https://www.udemy.com/user/arnold-abraham-3/)

</details>


# Challenge33 + Pro Solution 😉
## Create a function to convert a CSV text to a “bi-dimensional” array. Use the string "Arnold;Abraham;On;Medium\nRead;Amazing;Programming;Content"

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 33"</summary>

```javascript

let data = "Arnold;Abraham;On;Medium;\nRead;Amazing;Programming;Content";

let array = csvToArray(data);

console.log(JSON.stringify(array));

function csvToArray(data)
{
    let arrays = data.split("\n");

    for(let i = 0; i < arrays.length; i++)
    {
        let lineOfWords = arrays[i].split(";");
        arrays[i] = lineOfWords;
    }

    return arrays;
}

````
## Solution for pro developers!
```javascript
console.log(csvToArrayPro(data))

function csvToArrayPro(data)
{
   return data.split("\n").map(x => x.split(';').map(x => x));
}

```

## Explanation For-Loop Solution

To generate a bidimensional array, you simply need two steps. 

First you split the given string by the escape sequence of `\n` and then you already have an array of two seperate lines.

What you do next is to split every word by the csv-delimiter (in this case the `;`) to assign them into a new array. 

That's it! :)

The following picture shows the result.

![The Result in the Console](res/png/solution33.jpg)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

If you want to dig deeper into professional coding in JavaScript check out the pro solution.

## Explanation Pro Solution

To achieve the same result with prior JavaScript knowledge, I used some built-in functionality:

- [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) - The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Become a [Web Developer with a huge time saving journey and take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course).

Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount 26 Cheatsheets and vital Web Development Tips, Tricks and Insights await you! Subscribe here.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img2.jpg)](https://www.udemy.com/user/arnold-abraham-3/)

</details>

# Challenge34 + Pro Solution 😉
## Create a function that will convert a string in an array containing the ASCII codes of each character. Use the string of "I like JavaScript and the Arnold Code Academy".



<details>
    <summary>Spoiler "Solution-Explanation For Challenge 34"</summary>

```javascript

console.log(getCharCodes("I like JavaScript and the Arnold Code Academy"));

function getCharCodes(string)
{
    let array = [];

    for(let i = 0; i < string.length; i++)
    {
        let code = string.charCodeAt(i);
        array.push(code);
    }

    return array;
}

````
## Solution for pro developers!
```javascript

console.log(getCharCodesPro("I like JavaScript and the Arnold Code Academy"));

function getCharCodesPro(string) {
    return [...string].map(char => char.charCodeAt(0))
}

```

## Explanation For-Loop Solution

The first line is logging the outcome of calling a function called `getCharCodes`.

You need to pass the string 'I like JavaScript and the Arnold Code Academy'. 

This `getCharCodes` function accepts a `string` as input and gives you back an array of character codes for every character in the string.

Inside the function, you first create an empty array called `array`.

Then, you want to use a for loop to go through each character in the input string. 

With each iteration, you call the `charCodeAt` method to get the character code for the current character and store it in a variable called code.

After that, you add the value of `code` to the array using the `push()` method. 

Finally, the function returns the full array as its result.

![The Result in the Console](res/png/solution34.jpg)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

If you want to dig deeper into professional coding in JavaScript check out the pro solution.

## Explanation Pro Solution

To achieve the same result with prior JavaScript knowledge, I used some built-in functionality:

- [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
- [charCodeAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) - The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.


Become a [Web Developer with a huge time saving journey and take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course).

Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount 26 Cheatsheets and vital Web Development Tips, Tricks and Insights await you! Subscribe here.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img2.jpg)](https://www.udemy.com/user/arnold-abraham-3/)

</details>


# Challenge35 + Pro Solution 😉
## Create a function that will convert an array containing ASCII codes in a string. The array [73,  32, 108, 105, 107, 101,  32,  74, 97, 118,  97,  83,  99, 114, 105, 112, 116,  32,  97, 110, 100,  32,  65, 114, 110, 111, 108, 100,  67, 111, 100, 101].

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 35"</summary>

```javascript

console.log(codesToString([73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116, 32, 97, 110, 100, 32, 65, 114, 110, 111, 108, 100, 67, 111, 100, 101]));

function codesToString(array) {
    return String.fromCharCode(...array);
}


````
## Solution for pro developers!
```javascript

// It is already a pro solution ;)

```

## Explanation Solution

To achieve the result define a function named `codesToString` that takes an array of numbers as a parameter and returns a string that is composed of the characters corresponding to those numbers in the ASCII table.

For example, the number 65 corresponds to the character ‘A’, the number 32 corresponds to the space character, and so on.

Call then the function `codesToString` with an array of numbers as an argument to print the result to the console. 

You do this by using the `console.log` method.

The result is the string `I like JavaScript and ArnoldCode`.

The code uses the spread operator (`…`) to pass the elements of the array as individual arguments to the `String.fromCharCode` method.

Thus it converts each number to a character and concatenates them into a string.

This is a shorthand way of writing

`String.fromCharCode(array[0], array[1], array[2], …, array[n])` 

or 

`for(let i; i < array.length; i++){ ....}`.

![The Result in the Console](res/png/solution35.jpg)

If you want to learn coding shown in this challenge,
become a [Web Developer with a huge time saving journey and take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course).

Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount 26 Cheatsheets and vital Web Development Tips, Tricks and Insights await you! Subscribe here.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img2.jpg)](https://www.udemy.com/user/arnold-abraham-3/)

</details>


# Challenge36 + Pro Solution 😉
## Implement the Caesar cypher. Use the string of "I LIKE ARNOLDCODE AND JAVASCRIPT"

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 36"</summary>

```javascript

let text = "I LIKE ARNOLDCODE AND JAVASCRIPT";
let textEnc = encrypt(text, 13);
let textDec = decrypt(textEnc, 13);

console.log(text);
console.log(textEnc);
console.log(textDec);

// Decrypt a message by using the same encrypt function
// ... but using the inverse of the key (e.g. rotate in the other direction)

function decrypt(msg, key)
{
    return encrypt(msg, key * -1);
}

// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key

function encrypt(message, key)
{
    let encryptedMessage = "";

    for(let i = 0; i < message.length; i++)
    {
        let code = message.charCodeAt(i);

        // Encrypt only letters in 'A' ... 'Z' interval
        if (code >= 65 && code <= 65 + 26 - 1)
        {
            code -= 65;
            code = mod(code + key, 26);
            code += 65;
        }

        encryptedMessage += String.fromCharCode(code);
    }

    return encryptedMessage;
}


// Modulo function: n mod p
function mod(number, moduloDivisor)
{
    if ( number < 0 )
        number = moduloDivisor - Math.abs(number) % moduloDivisor;

    return number % moduloDivisor;
}

````
## Solution for pro developers!
```javascript

let textEncPro = encryptPro(text, 13);
let textDecPro = encryptPro(textEnc, -13);

console.log(textEncPro);
console.log(textDecPro);

function encryptPro(message, key) {
    return message.split('')
        .map(char =>
            String.fromCharCode(
                char.charCodeAt(0) >= 65
                && char.charCodeAt(0) <= 90 ? 65
                    + mod(char.charCodeAt(0) - 65 + key, 26)
                    : char.charCodeAt(0)))
        .join('');
}

```

## Explanation For-Loop Solution

This is a bigger challenge, but here we go, we are strong and will stand tall!

### Ceaser Cypher

This code defines two functions: `encrypt` and `decrypt`, that implement the Caesar cipher.

A simple encryption technique that shifts each letter of a message by a fixed number of positions in the alphabet.

The number of positions is called the key, and it can be any integer. 

For example, if the key is 3, then A becomes D, B becomes E, C becomes F, and so on. 

To decrypt a message, the same function can be used, but with the inverse of the key, which means shifting the letters in the opposite direction.

For example, if the key is 3, then D becomes A, E becomes B, F becomes C, and so on.

### The Overall Procedure

The code then declares a variable `text` that holds the string `I LIKE ARNOLDCODE AND JAVASCRIPT`.

It then calls the encrypt function with the text and the key 13 as arguments, and assigns the result to a variable `textEnc`.

This means that each letter of the text is shifted by 13 positions in the alphabet, which is also known as the ROT13 cipher. 

For example, I becomes V, L becomes Y, K becomes X, and so on. 

The encrypted text is `V YVXR NEABYQPBQR NAQ WNINFPVCGR`.

The code then calls the decrypt function with the textEnc and the key 13 as arguments, and assigns the result to a variable `textDec`.

This means that each letter of the textEnc is shifted by -13 positions in the alphabet, which is the inverse of the key 13. 

This reverses the encryption and returns the original text. The decrypted text is `I LIKE ARNOLDCODE AND JAVASCRIPT`.

The code then prints the `text`, the `textEnc`, and the `textDec` to the console using the console.log method. 

The output is:

![The Result in the Console](res/png/solution36.jpg)

### The Encrypt Function

The `encrpyt` function works by looping through each character of the message and getting its ASCII code using the `charCodeAt` method.

The function works by creating an empty string named `encryptedMessage`, and then looping through each character of the message using a `for` loop.

For each character, the function gets its ASCII code using the `charCodeAt` method. 

The ASCII code is a number that represents a character in a standard encoding system. 

For example, the ASCII code of A is 65, the ASCII code of B is 66, and so on.

The function then checks if the code is between 65 and 90, which are the codes of the uppercase letters A to Z. 

If it is, the function subtracts 65 from the code, which makes it a number between 0 and 25, corresponding to the position of the letter
in the alphabet. 

For example, the code of A becomes 0, the code of B becomes 1, and so on. 

The function then adds the `key` to the code, which shifts it by the `key` positions in the alphabet.
For example, if the `key` is 3, the code of A becomes 3, the code of B becomes 4, and so on. 

The function then uses the mod function to make sure that the code stays within the range of 0 to 25, 
which means that if the code goes beyond 25, it wraps around to the beginning of the alphabet. 
For example, if the key is 3, the code of Z becomes 2, the code of Y becomes 1, and so on. 

The function repeats this process for every character of the message, and then returns the encryptedMessage string as the output.
For example, if the message is “HELLO” and the key is 3, the function returns `KHOOR` as the encrypted message.

### The Mod Function
The `mod` function works by using the modulo operator (`%`) to get the remainder of the division of the number by the modulo divisor.
For example, mod(28, 26) is 2, mod(-1, 26) is 25, and so on. 

The function then adds 65 to the code, which makes it a number between 65 and 90, corresponding to the ASCII code of the shifted letter. 
For example, the code of A becomes 68, the code of B becomes 69, and so on. 

The function then converts the code to a character using the fromCharCode method, and appends it to the encryptedMessage string.
For example, the code of A becomes D, the code of B becomes E, and so on.

### The Decrypt Function

Just calls the `encrypt` function with a negative key to inverse the shifting operation.

For the result: Since you encrypted with `13` you just call `encrypt` with `-13`:)

*This isn’t the best method you can use but a suitable one, if you are just starting out.*

If you want to dig deeper into professional coding in JavaScript check out the pro solution.

## Explanation Pro Solution

To achieve the same result with prior JavaScript knowledge, I used some built-in functionality:

- [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) - The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
- [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) -  This method takes a separator and returns a new string by concatenating all the elements of the array, separated by the separator. If the separator is omitted, the method uses a comma as the default separator.

Become a [Web Developer with a huge time saving journey and take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course).

Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount 26 Cheatsheets and vital Web Development Tips, Tricks and Insights await you! Subscribe here.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img2.jpg)](https://www.udemy.com/user/arnold-abraham-3/)

</details>

# Challenge37 + Pro Solution 😉
## Implement the bubble sort algorithm for an array of numbers. The array [23, 999, 777,512, 1000, 1, -1, 8, 3].

<details>
    <summary>Spoiler "Solution-Explanation For Challenge 37"</summary>

```javascript
let array = [23, 999, 777,512, 1000, 1, -1, 8, 3];

console.log(array);

bubbleSort(array);

console.log(array);

function bubbleSort(array)
{
    let shouldSort = true;
    let length = array.length;

    while(shouldSort)
    {
        shouldSort = false;
        length--;

        for(let i = 0; i < length; i++)
        {
            let a = array[i];
            if ( a > array[i+1] )
            {
                array[i] = array[i+1];
                array[i+1] = a;
                shouldSort = true;
            }
        }
    }
}

````
## Solution for pro developers!
```javascript

console.log(bubbleSortPro(array));

function bubbleSortPro(array) {
    for(let i = 0; i < array.length; i++) {
        array.sort((a, b) => a - b);
    }
    return array;
}

```

### Bubble Sort in A Nutshell

The bubble sort algorithm is a simple sorting algorithm that works by repeatedly swapping adjacent elements in an array that are out of order until the array is sorted.

It is called bubble sort because the smaller elements “bubble” up to the beginning of the array while the larger elements “sink” to the end.

The algorithm has a time complexity of O(n^2), which means it is inefficient for large arrays.

## Explanation For-Loop Solution

The solution is a simple implementation of the bubble sort algorithm.

Get there by defining a function called `bubbleSort` that takes an `array` of numbers as an argument.

The local variables `shouldSort` determines if the sorting continues.

What's up with `length` is covered in a second.

The `while` loop will sort the `array` in ascending order. As long as `shouldSort` is true, the `while` loop will continue.

Inside the while loop, the `shouldSort` flag is set to false, indicating that the array is already sorted. 

The `length` of the argument is decremented at the start of each iteration because the largest elements "bubble" to the top of the array, so the last element doesn't need to be compared in subsequent iterations.

The `while` loop then enters a `for` loop that iterates through the `array` and compares adjacent elements. 

The algorithm compares two adjacent elements and swaps them if they are in the wrong order. 

If a swap occurs, the `shouldSort` flag is set to `true`, indicating that the `array` is not yet sorted.

The `while` loop continues until no swaps are made in a full iteration, which indicates that the array is sorted.

After the sorting is complete, the function returns the sorted `array`.

![The Result in the Console](res/png/solution37.jpg)


*This isn’t the best method you can use but a suitable one, if you are just starting out.*

If you want to dig deeper into professional coding in JavaScript check out the pro solution.

## Explanation Pro Solution

To achieve the same result with prior JavaScript knowledge, I used some built-in functionality:

- [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - The sort() method sorts the elements of an array in place and returns the sorted array.

Become a [Web Developer with a huge time saving journey and take my course](https://arnoldcodeacademy.teachable.com/p/javascript-beginner-course).

Explanations and story telling break the 4th dimensions to save you a lot of time & effort 😉

[A discount 26 Cheatsheets and vital Web Development Tips, Tricks and Insights await you! Subscribe here.](https://arnoldcodeacademy.ck.page/26webdevcheatsheets)

[![Build A Game UI and an Online Resume with HTML & CSSFundamentals of Web Development (HTML & CSS) Backed By A Game UI and Online ResumeRating: 5.0; 4 total hours; 50 lectures](res/promo/img2.jpg)](https://www.udemy.com/user/arnold-abraham-3/)

</details>
