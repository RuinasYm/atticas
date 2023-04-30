const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("blacklist")
        .setDescription("🤖 Saca al bot de un Servidor")
        .addStringOption(option => option.setName("servidor").setDescription("Indica la id del Servidor").setRequired(true)),

    async run(client, interaction){

        let e = new Discord.MessageEmbed()

        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })


        
        const servidor = interaction.options.getString("servidor")  
        client.guilds.cache.get(servidor).leave() 
        

        const embed = new Discord.MessageEmbed()
                 
        .setAuthor("KickSv", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setDescription(`**<:sucess:1083547524717101056> | He abandonado correctamente el servidor ${servidor}! | <:sucess:1083547524717101056>**`)
        .setColor("e60ad4")
        
        
        interaction.reply({embeds: [embed] })
    }
}

