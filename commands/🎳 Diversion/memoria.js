const { FindEmoji } = require('discord-gamecord');


module.exports = {
    name: "memoria",
    alias: ['findemoji'],
    desc: "Sirve para Jugar",
    uso: "!wordle",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute(client, message, args)  {
 

        const Game = new FindEmoji({
          message: message,
          isSlashGame: false,
          embed: {
            title: 'Juego de Memoria',
            color: 'RANDOM',
            description: 'Recuerda los emojis del tablero de abajo.',
            findDescription: 'Encuentra el emoji {emoji} antes de que se acabe el tiempo.'
          },
          timeoutTime: 60000,
          hideEmojiTime: 5000,
          buttonStyle: 'PRIMARY',
          emojis: ['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'],
          winMessage: '¡Ganaste! Seleccionaste el emoji correcto. {emoji}',
          loseMessage: '¡Perdiste! Seleccionaste el emoji equivocado. {emoji}',
          timeoutMessage: '¡Perdiste! Te has quedado sin tiempo. El emoji es {emoji}',
          playerOnlyMessage: 'Oye! esta jugando {player}.'
        });
        
        Game.startGame();
        Game.on('gameOver', result => {
        });
    }
}
