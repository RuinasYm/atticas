const { Flood } = require('discord-gamecord');
const Discord = require('discord.js')

module.exports = {
  name: "flood",
  alias: [],
  desc: "Sirve para Jugar",
  uso: "!flood <easy> <normal>",
  permisos: ["SEND_MESSAGES"],
  permisos_bot: ["ADMINISTRATOR"], 
  valoracion: "⭐⭐⭐⭐⭐",
  async execute(client, message, args) {

    // Verificar si el usuario proporcionó un argumento y establecer la dificultad en consecuencia
    if (args[0] === "easy") {
      difficulty = 8;
    } else if (args[0] === "normal") {
      difficulty = 13;
    } else {
        return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  Uso: !flood \`<easy>\` \`<normal>\`! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })

    }

    const Game = new Flood({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Juego Flood',
        color: 'RANDOM',
      },
      difficulty: difficulty,
      timeoutTime: 60000,
      buttonStyle: 'PRIMARY',
      emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
      winMessage: 'Has ganado!, Usaste **{turns}** tiros.',
      loseMessage: 'Has perdido!, Usaste **{turns}** tiros.',
      playerOnlyMessage: 'Oye! esta jugando {player}.'
    });

    Game.startGame();
    Game.on('gameOver', result => {
    });
  }
}
