const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

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
    data: new SlashCommandBuilder()
        .setName("bomb")
        .setDescription("💣 Utilizalo para lanzar una Bomba!"),
    async run(client, interaction){

        let bomb = bombas[Math.floor(Math.random() * bombas.length)];

        const embed = new Discord.MessageEmbed()
            .setAuthor("Lanzaron una Bomba!", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setImage(`${bomb}`) //Esto es opcional, solo pones la URL de la imagen
            .setColor("e60ad4") //Esto es opcional tambien, si quieres le puedes poner un color pero siempre todo en mayuscula y que sea en ingles el color, o tambien puedes poner un Hexcolor
             //footer del embed
            ; //para que le salga la hora que lo ejecuto

        
        interaction.reply({ embeds: [embed] })

    }

}