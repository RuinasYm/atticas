const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const db = require("megadb")
const DB = new db.crearDB("Warns")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("warn")
        .setDescription("⚠️ Gestiona los warns")
        .addStringOption((option) => {
            return option
                .setName("selecciona")
                .setDescription("Escoje un opcion")
                .setChoices(
                    { name: "⚠️ → Warn", value: "1" },
                    { name: "⚠️ → Un_Warn", value: "2" },
                    { name: "⚠️ → Warn_List", value: "3" },


                )
                .setRequired(true)
        })
        .addUserOption(option => option.setName('usuario').setDescription('selecciona un usuario').setRequired(true))
        .addStringOption(option => option.setName('razon').setDescription('Indica una razon').setRequired(false)),

    async run(client, interaction){

        let e = new Discord.MessageEmbed()
        const c = interaction.options.getString('selecciona')
        let user = interaction.options.getUser("usuario")
        let razon = interaction.options.getString("razon")


        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
        

            if (c) 
            if (c === "1"){ 
                if(!DB.tiene(user.id, 0)){
                    DB.establecer(user.id, 0)
                    
                } 
        
                DB.sumar(user.id, 1)
                
                interaction.reply({ embeds: [e.setDescription(`**${user} ha sido warneado por ${interaction.member}**\n > **Razón:** ${razon}`).setColor("e60ad4").setAuthor(`Warn`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")], ephemeral: true })
             
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`Warn`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                    .setDescription(`**${user} ha sido warneado por ${interaction.member}**\n\n > **Razón:** ${razon}`)
                    
                    
                    .setColor("e60ad4")
        
                    interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
                    
             } else { }
            if (c === "2"){ 
                DB.restar(user.id, 1)

                interaction.reply({ embeds: [e.setDescription(`**${user} ha sido deswarneado por ${interaction.member}**\n > **Razón:** ${razon}`).setColor("e60ad4").setAuthor(`Warn`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")], ephemeral: true })
             
             } else { } 
            if (c === "3"){ 
                const warns = await DB.obtener(user.id)


                if(!DB.tiene(user.id, 0)){
                    return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  Este usuario no tiene ningun Warn! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
                } else {
            
                    interaction.reply({ embeds: [e.setDescription(` > **Usuario: ${user}\n > Warns:** \`${warns}\``).setColor("e60ad4").setAuthor(`Warn`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")], ephemeral: true })
                 
                }
            
             } else { }

        }
     }
    