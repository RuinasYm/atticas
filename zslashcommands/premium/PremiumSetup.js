const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("premium")
        .setDescription("✨ → añade o remueve un usuario!")
        .addStringOption((option) => {
            return option
                .setName("opciones")
                .setDescription("✨ → Premium")
                .setChoices(
                    { name: "✨ → Agregar Premium", value: "1" },
                    { name: "✨ → Remover Premium", value: "2" }

                )
                .setRequired(true)
        })
        .addUserOption(option => option.setName("usuario").setDescription("Ingresa un Usuario").setRequired(true)),
        
    async run(client, interaction){

        let e = new Discord.MessageEmbed()
        let selecion = interaction.options.getString("opciones")
        const user = interaction.options.getUser("usuario")

            if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

        if (selecion) {
            if (selecion === "1") { 
                db.set(`premium_${user.id}`, true)
                const embed = new Discord.MessageEmbed()
                .setAuthor("Premium", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                .setColor("e60ad4")
                
                .setDescription(` > **Nuevo usuario Premium! \n > Usuario:** <@${user.id}>`)
                
                interaction.reply({embeds: [embed]}) } else { }
            
        if (selecion === "2") { if (db.get(`premium_${user.id}`) === null || db.get(`premium_${user.id}`) === false)return  interaction.reply({
            embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  El usuario mencionado no es Premium!! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
        })
        
        db.set(`premium_${user.id}`, false)
        const embed = new Discord.MessageEmbed()
        .setAuthor("Premium", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
        .setColor("e60ad4")
        
        .setDescription(` > **Premium Removido! \n > Usuario:** <@${user.id}>`)
        
        interaction.reply({embeds: [embed]}) } }


                
            }
        }
        