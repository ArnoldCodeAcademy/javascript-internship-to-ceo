// Solution to Challenge 54
class Node {
    constructor(x, y, isWall = false) {
        this.x = x;
        this.y = y;
        this.isWall = isWall;
        this.g = Infinity;
        this.h = Infinity;
        this.parent = null;
    }
}

function generateMaze(width, height) {
    const maze = new Array(height);
    for (let y = 0; y < height; y++) {
        maze[y] = new Array(width);
        for (let x = 0; x < width; x++) {
            const isWall = Math.random() < 0.3;
            maze[y][x] = new Node(x, y, isWall);
        }
    }
    maze[0][0].isWall = false;
    maze[height - 1][width - 1].isWall = false;
    return maze;
}

function manhattanDistance(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function aStar(maze, start, end) {
    const openSet = [start];
    start.g = 0;
    start.h = manhattanDistance(start, end);

    while (openSet.length > 0) {
        openSet.sort((a, b) => a.g + a.h - (b.g + b.h));
        const current = openSet.shift();

        if (current === end) {
            const path = [];
            let node = current;
            while (node) {
                path.unshift(node);
                node = node.parent;
            }
            return path;
        }

        const neighbors = [
            [0, -1], // Up
            [1, 0], // Right
            [0, 1], // Down
            [-1, 0], // Left
        ].map(([dx, dy]) => {
            const x = current.x + dx;
            const y = current.y + dy;
            return maze[y] && maze[y][x];
        }).filter(Boolean);

        for (const neighbor of neighbors) {
            if (neighbor.isWall) continue;
            const tentative_g = current.g + 1;
            if (tentative_g < neighbor.g) {
                neighbor.parent = current;
                neighbor.g = tentative_g;
                neighbor.h = manhattanDistance(neighbor, end);
                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    return null;
}

function findShortestPathInMaze(width, height) {
    const maze = generateMaze(width, height);
    const start = maze[0][0];
    const end = maze[height - 1][width - 1];
    const path = aStar(maze, start, end);

    if (path) {
        for (const node of path) {
            node.isPath = true;
        }
    }

    return maze.map(row => row.map(node => (node.isWall ? "#" : node.isPath ? "P" : " ")));
}

// Example usage:
const width = 10;
const height = 10;
const mazeWithShortestPath = findShortestPathInMaze(width, height);

mazeWithShortestPath.forEach(row => console.log(row.join("")));
