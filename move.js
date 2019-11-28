const { getRandomInt, createGrid, parseGrid, getGoodMoves } = require('./utils');
/*
{
  "game": { "id": "game-id-string" },
  "turn": 4,
  "board": {
    "height": 15,
    "width": 15,
    "food": [ { "x": 1, "y": 3 } ],
    "snakes": [ {
        "id": "snake-id-string",
        "name": "Sneky Snek",
        "health": 90,
        "body": [ { "x": 1, "y": 3 } ]
      } ]
  },
  "you": {
    "id": "snake-id-string",
    "name": "Sneky Snek",
    "health": 90,
    "body": [ { "x": 1, "y": 3 } ]
  }
}
*/

const move = (request, response) => {
  const { board, game, turn, you } = request.body;
  const grid = parseGrid(createGrid(board.width, board.height), board.snakes, board.food);

  // console.log(grid);
  // debugger;

  // const moves = ['up', 'down', 'left', 'right'];
  const moves = getGoodMoves(grid, you.body[0]);
  const move = getRandomInt(0, moves.length);

  /*
  console.log('-----------------');
  console.log(moves);
  console.log(moves[move]);
  console.log('-----------------');
  */

  // Response data
  const data = {
    move: moves[move],
  };

  return response.json(data);
};

module.exports = move;

// init
// evaluate
// terminate?
// select
// variation

/*
const randomSeed = 1;
const mutationRate = 0.05;
const mustationStep = 0.2;

const score = 0;
const moves = ['up', 'down', 'left', 'right'];

const genomes = [];

const genome = {
  id: Math.random(),
  action: getRandomInt(0, 4),
  score: Math.random() - 0.5,
  length: Math.random() - 0.5,
  health: Math.random() - 0.5,
};
*/
