const { MatchPairs } = require('discord-gamecord');

module.exports = {
    name: "parejas",
    alias: ['pares'],
    desc: "Sirve para Jugar",
    uso: "!parejas",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute(client, message, args)  {


const Game = new MatchPairs({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Juego Parejas',
    color: '#5865F2',
    description: 'Haga clic en los botones para unir emojis con sus parejas.'
  },
  timeoutTime: 60000,
  emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
  winMessage: '¡Ganaste el juego! Convertiste un total de fichas `{tilesTurned}`.',
  loseMessage: '¡Perdiste el juego! Convertiste un total de fichas `{tilesTurned}`.',
  playerOnlyMessage: 'Oye! esta jugando {player}.'
});

Game.startGame();
Game.on('gameOver', result => {
})
    }
}