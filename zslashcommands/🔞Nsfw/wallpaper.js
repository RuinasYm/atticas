const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('wallpaper')
    .setDescription('🔞 → Genera un wallpaper'),

    async run(client, interaction) { 

        const e = new Discord.MessageEmbed()

        if (!interaction.channel.nsfw) return interaction.reply({ embeds: [e.setDescription(`**<:fail:1083542064924479549> |  Este comando solo funciona en canales Nsfw! | <:fail:1083542064924479549>**`).setColor("e60ad4")], ephemeral: true })
   
    
       const embed = new Discord.MessageEmbed()
       .setAuthor({name: `Wallpaper`, iconURL:"https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png"})
       .setFooter({text: "Gracias por Preferirnos", iconURL: ''})
       .setColor("e60ad4")
       .setImage(await nsfw.wallpaper())
       interaction.reply({ embeds: [embed] });
    }
}