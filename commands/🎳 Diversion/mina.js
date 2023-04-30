const { Minesweeper } = require('discord-gamecord');

module.exports = {
    name: "mina",
    alias: [],
    desc: "Sirve para Jugar",
    uso: "!mina",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute(client, message, args)  {

const Game = new Minesweeper({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Juego Mina',
    color: 'RANDOM',
    description: 'Haga clic en los botones para revelar los bloques excepto las minas.'
  },
  emojis: { flag: '🚩', mine: '💣' },
  mines: 5,
  timeoutTime: 60000,
  winMessage: '¡Ganaste el juego! Has evitado con éxito todas las minas.',
  loseMessage: '¡Perdiste el juego! Cuidado con las minas la próxima vez.',
  playerOnlyMessage: 'Oye! esta jugando {player}.'
});

Game.startGame();
Game.on('gameOver', result => {
})
    }
}