const { Slots } = require('discord-gamecord');

module.exports = {
    name: "cacino",
    alias: ['slots'],
    desc: "Sirve para Jugar",
    uso: "!slots",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute(client, message, args)  {

    const Game = new Slots({
          message: message,
          isSlashGame: false,
          embed: {
            title: 'Juego Casino',
            color: 'RANDOM'
          },
          slots: ['🍇', '🍊', '🍋', '🍌']
        });
        
        Game.startGame();
        Game.on('gameOver', result => {
        })
    }
}