const { getRandomInt } = require('./utils');
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
  const { board, game, turn, you } = request;
  // debugger;
  // console.log(request.body);
  const move = getRandomInt(0, 4);
  const moves = ['up','down','left','right'];

  // Response data
  const data = {
    move: moves[move],
  };

  return response.json(data);
};

module.exports = move;
