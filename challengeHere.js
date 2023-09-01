// Solution to Challenge 53

class City {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceTo(city) {
        const dx = this.x - city.x;
        const dy = this.y - city.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Route {
    constructor(cities) {
        this.cities = cities;
        this.distance = this.calculateTotalDistance();
    }

    calculateTotalDistance() {
        let totalDistance = 0;
        for (let i = 1; i < this.cities.length; i++) {
            totalDistance += this.cities[i - 1].distanceTo(this.cities[i]);
        }
        totalDistance += this.cities[this.cities.length - 1].distanceTo(this.cities[0]);
        return totalDistance;
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selection(population) {
    const tournamentSize = 5;
    let bestRoute;
    for (let i = 0; i < tournamentSize; i++) {
        const randomIndex = randomInt(0, population.length - 1);
        const candidate = population[randomIndex];
        if (!bestRoute || candidate.distance < bestRoute.distance) {
            bestRoute = candidate;
        }
    }
    return bestRoute;
}

function crossover(parent1, parent2) {
    const start = randomInt(0, parent1.cities.length - 2);
    const end = randomInt(start + 1, parent1.cities.length - 1);
    const childCities = parent1.cities.slice(start, end);
    const remainingCities = parent2.cities.filter(city => !childCities.includes(city));
    return new Route([...childCities, ...remainingCities]);
}

function mutate(route, mutationRate) {
    for (let i = 0; i < route.cities.length; i++) {
        if (Math.random() < mutationRate) {
            const j = randomInt(0, route.cities.length - 1);
            [route.cities[i], route.cities[j]] = [route.cities[j], route.cities[i]];
        }
    }
    route.distance = route.calculateTotalDistance();
}

function geneticAlgorithm(cities, populationSize, generations, mutationRate) {
    let population = [];
    for (let i = 0; i < populationSize; i++) {
        const shuffledCities = cities.slice().sort(() => Math.random() - 0.5);
        population.push(new Route(shuffledCities));
    }

    for (let generation = 0; generation < generations; generation++) {
        const newPopulation = [];
        for (let i = 0; i < populationSize; i++) {
            const parent1 = selection(population);
            const parent2 = selection(population);
            const child = crossover(parent1, parent2);
            mutate(child, mutationRate);
            newPopulation.push(child);
        }
        population = newPopulation;
    }

    return population.reduce((best, route) => (route.distance < best.distance ? route : best));
}

// Example usage
const cities = [
    new City(60, 200),
    new City(180, 200),
    new City(80, 180),
    new City(140, 180),
    new City(20, 160),
    new City(100, 160),
    new City(200, 160),
    new City(140, 140),
];

const populationSize = 100;
const generations = 500;
const mutationRate = 0.1;

const bestRoute = geneticAlgorithm(cities, populationSize, generations, mutationRate);

console.log('Shortest route:', bestRoute.cities);
console.log('Total distance:', bestRoute.distance);

