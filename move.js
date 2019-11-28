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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const move = (request, response) => {
  const { board, game, turn, you } = request;
  // debugger;
  // console.log(request.body);
  cosnt move = getRandomInt(0, 3);
  const moves = ['up','down','left','right'];

  // Response data
  const data = {
    move: moves[move], // one of: []
  };

  return response.json(data);
};

module.exports = move;
