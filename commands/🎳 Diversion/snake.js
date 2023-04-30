const { Snake } = require('discord-gamecord');
  module.exports = {
    name: "snake",
    alias: [],
    desc: "Sirve para Jugar",
    uso: "!snake",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute(client, message, args)  {

   const Game = new Snake({
          message: message,
          isSlashGame: false,
          embed: {
            title: 'Juego Snake',
            overTitle: 'Juego Terminado',
            color: 'RANDOM'
          },
          emojis: {
            board: '⬛',
            food: '🍎',
            up: '⬆️', 
            down: '⬇️',
            left: '⬅️',
            right: '➡️',
          },
          stopButton: 'Parar',
          timeoutTime: 60000,
          snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
          foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
          playerOnlyMessage: 'Oye! esta jugando {player}.'
        });
        
        Game.startGame();
        Game.on('gameOver', result => {
        });
    }
  }