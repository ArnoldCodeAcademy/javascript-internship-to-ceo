// Solution with for - loops

console.log(getDistance(101, 102, 69, 311));

function getDistance(x1, y1, x2, y2)
{
    let distanceX = x2 - x1;
    let distanceY = y2 - y1;

    return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
}

// Solution for pro developer!


console.log(getDistancePro(101, 102, 69, 311));

function getDistancePro(x1, y1, x2, y2)
{
    return Math.hypot(x2 - x1, y2 - y1);
}

// EXPLANATION in README.MD
