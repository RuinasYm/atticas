const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("sugerencia")
        .setDescription("💡 Envia una Sugerencias!")
        .addStringOption(o => o.setName("contenido").setDescription("Escribe una sugerencias").setRequired(true))
        .addBooleanOption(oa => oa.setName("anonimo").setDescription("Establece si la sugerencia sera Anonima!").setRequired(true)),
        
    async run(client, interaction, args){
        let e = new Discord.MessageEmbed()
        
        const contenido = interaction.options.getString("contenido")
        const anonimo = interaction.options.getBoolean("anonimo")
        
        if(!suggest.tiene(interaction.guild.id)) return interaction.reply({ embeds: [e.setDescription(`**<:fail:1083542064924479549> | No hay un canal de Sugerencia en este Servidor! | <:fail:1083542064924479549>**`).setColor("e60ad4")], ephemeral: true })
        if(anonimo === false){
            const embed = new Discord.MessageEmbed()
            .setDescription(` > ${contenido}`)
            .setAuthor(`Sugerencia de ${interaction.user.tag}`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            
            
        
            client.channels.cache.get("1083551554021380237").send({embeds: [embed] }).then(m =>{
                m.react("👍")
                m.react("🤷‍♂️")
                m.react("👎")
            }) 
        
        }
        
        if(anonimo === true){
            const embed1 = new Discord.MessageEmbed()
            .setDescription(` > ${contenido}`)
            .setAuthor(`Sugerencia Anonima`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
            .setColor("e60ad4")
            
            
        
            client.channels.cache.get("1083551554021380237").send({embeds: [embed1] }).then(m =>{
                m.react("👍")
                m.react("🤷‍♂️")
                m.react("👎")
            }) 
        
        
        }

             interaction.reply({ embeds: [e.setDescription(`**<:sucess:1083547524717101056> |  Sugerencia enviada correctamente! | <:sucess:1083547524717101056>**`).setColor("e60ad4")], ephemeral: true })
             
        }
        
        }
        