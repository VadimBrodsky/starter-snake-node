function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

function createGrid(width, height) {
  const grid = [];
  for (let i = 0; i < width; i++) {
    grid[i] = [];
    for (let j = 0; j < height; j++) {
      grid[i][j] = '_';
    }
  }
  return grid;
}

function parseGrid(grid, snakes, food) {
  snakes.forEach((snake) => {
    snake.body.forEach(({ x, y }) => {
      grid[x][y] = 'S';
    });
  });

  food.forEach(({ x, y }) => {
    grid[x][y] = 'F';
  });

  return grid;
}

function getGoodMoves(grid, position) {
  const around = {
    up: { x: position.x, y: position.y - 1 },
    down: { x: position.x, y: position.y + 1 },
    left: { x: position.x - 1, y: position.y },
    right: { x: position.x + 1, y: position.y },
  };

  debugger;

  const filtered = Object.entries(around)
    .filter(([key, { x, y }]) => x > -1 && y > -1)
    .filter(([key, { x, y }]) => x < grid.length && y < grid[0].length)
    .filter(([key, { x, y }]) => grid[x][y] === '_' || grid[x][y] === 'F')
    .map(([label]) => label);

  debugger;

  return filtered;
}

module.exports = {
  createGrid,
  getRandomInt,
  parseGrid,
  getGoodMoves,
};
