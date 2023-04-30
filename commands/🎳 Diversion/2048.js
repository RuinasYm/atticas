const { TwoZeroFourEight } = require('discord-gamecord');

module.exports = {
    name: "2048",
    alias: [],
    desc: "Sirve para Jugar",
    uso: "!2048",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute(client, message, args)  {


const Game = new TwoZeroFourEight({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Juego 2048',
    color: 'RANDOM'
  },
  emojis: {
    up: '⬆️',
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  playerOnlyMessage: 'Oye! esta jugando {player}.'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
})
    }
}