// Solution with for - loops

console.log(collisionCircleCircle(400, 400, 200, 600, 600, 300));

function collisionCircleCircle(circle1X, circle1Y, circle1R, circle2X, circle2Y, circle2R)
{
    return getDistance(circle1X, circle1Y, circle2X, circle2Y) <= circle1R + circle2R;
}

// Calculate the distance between the two specified points
function getDistance(x1, y1, x2, y2)
{
    let distanceX = x2 - x1;
    let distanceY = y2 - y1;

    return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
}


// Solution for pro developer!

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}
const SQRT_2 = Math.sqrt(2);

let circle1 = new Circle(400, 400, 200);
let circle2 = new Circle(600, 600, 300);

let result = areCirclesColliding(circle1, circle2);

console.log(result);


function areCirclesColliding(circle1, circle2) {
    let distanceBetweenCenters = getDistanceBetweenPoints(circle1.x, circle1.y, circle2.x, circle2.y);
    let sumOfRadii = circle1.radius + circle2.radius;
    return distanceBetweenCenters <= sumOfRadii;
}

function getDistanceBetweenPoints(point1X, point1Y, point2X, point2Y) {
    let horizontalDifference = point2X - point1X;
    let verticalDifference = point2Y - point1Y;
    return SQRT_2 * Math.sqrt((horizontalDifference ** 2 + verticalDifference ** 2) / 2);
}

// EXPLANATION in README.MD
