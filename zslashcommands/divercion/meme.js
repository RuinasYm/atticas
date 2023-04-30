const hispamemes = require("hispamemes");
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("meme")
        .setDescription("😅 Genera un meme en el Servidor"),
    

    async run(client, interaction){

    const meme = hispamemes.meme(); //Hacemos que se genere/cambie el meme de manera random

        const embed = new Discord.MessageEmbed()//Definimos el embed
        .setAuthor(`Meme`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setColor("e60ad4")//Color
        .setImage(meme)//La imagen, que en este caso será el meme
        //Un footer
        //Hora y fecha en la que se envió el embed
    
        interaction.reply({ embeds: [embed] })//Enviamos el mensaje
    
  }

} 