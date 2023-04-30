const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("snipe")
        .setDescription("🔎 Ve el ultimo mensaje eliminado de un canal!"),
    
    async run(client, interaction){
        
        let e = new Discord.MessageEmbed()

        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

        
        const msg = client.snipes.get(interaction.channel.id)
        if(!msg) return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> | No hay mensajes eliminados en este Canal! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

        const embed = new MessageEmbed()
        .setDescription(`**Mensaje Eliminado**\n\n > **Canal:** <#${interaction.channel.id}>\n > **Mensaje de:** <@${msg.author}>\n > **Contenido:** \`${msg.content}\``)
        
        .setAuthor(`Snipe`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setColor("e60ad4")//color del embed
        //footer del embed
        interaction.reply({ embeds: [embed] })
    }
}