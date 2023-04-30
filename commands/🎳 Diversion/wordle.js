const { Wordle } = require('discord-gamecord');

module.exports = {
    name: "wordle",
    alias: ['palabra'],
    desc: "Sirve para Jugar",
    uso: "!wordle",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute(client, message, args)  {

const Game = new Wordle({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Juego Wordle',
    color: 'RANDOM',
  },
  customWord: null,
  timeoutTime: 60000,
  winMessage: '¡Ganaste! La palabra era **{palabra}**.',
  loseMessage: '¡Perdiste! La palabra era **{palabra}**.',
  playerOnlyMessage: 'Oye! esta jugando {player}.'
});

Game.startGame();
Game.on('gameOver', result => {
});
    }
}