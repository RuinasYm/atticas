const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js')

var bombas = [
    "https://media.tenor.com/5e1S1sXovF4AAAAd/fbomb-bomb.gif",
    "https://media.tenor.com/Uy4FE6a_zuYAAAAC/run-fire.gif",
    "https://media.tenor.com/CEoB6xLMBkcAAAAC/chicken-bomb.gif",
    "https://media.tenor.com/F2MBHC2PajgAAAAd/sanalogy-spongebob.gif",
    "https://media.tenor.com/hDJ1EV_X0AIAAAAC/vasu.gif",
    "https://media.tenor.com/_TQcegphP7MAAAAd/boom-bomb.gif",
    "https://media.tenor.com/EuBh6n2QZPYAAAAC/bomb-explode.gif",

];

module.exports = {
    name: "bomba",
    alias: ["bomb"],
    desc: "Sirve para lanzar una bomba",
    uso: "!bomba",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute(client, message, args) {
        
        let bomb = bombas[Math.floor(Math.random() * bombas.length)];

        const embed = new Discord.MessageEmbed()
        .setAuthor({name: "Lanzaron una Bomba!", iconURL: client.user.displayAvatarURL({dynamic: true})})
        .setImage(`${bomb}`) //Esto es opcional, solo pones la URL de la imagen
        .setColor("e60ad4") //Esto es opcional tambien, si quieres le puedes poner un color pero siempre todo en mayuscula y que sea en ingles el color, o tambien puedes poner un Hexcolor
        
        ; //para que le salga la hora que lo ejecuto

        
        message.reply({ embeds: [embed] })

    }

}