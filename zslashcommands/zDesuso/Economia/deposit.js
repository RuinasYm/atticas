const ms = require("parse-ms");
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("depositar")
        .setDescription("💸 Deposita dinero en tu banco")
        .addStringOption(usuario => usuario.setName('cantidad').setDescription('Cantidad a depositar').setRequired(true)), // Creamos la opcion para mencionar un usuario y que sea obligatorio
    

    async run(client, interaction, args){

        let user = interaction.member;
        const cantidad = interaction.options.getString('cantidad')

        let member = db.fetch(`money_${user.id}`)

        if (cantidad == 'all') {
            let money = await db.fetch(`money_${user.id}`)

            let embedbank = new MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  No tienes suficiente dinero para Depositar! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")

            if (!money) return interaction.reply({embeds: [embedbank]})


            db.subtract(`money_${user.id}`, money)
            db.add(`bank_${user.id}`, money)
            let sembed = new MessageEmbed()
            .setDescription("**<:sucess:1083547524717101056> |  Se deposito todo tu dinero en el banco Correctamente! | <:sucess:1083547524717101056>**")
            .setColor("e60ad4")
            interaction.reply({embeds: [sembed]})

        } else {

            if (!cantidad) {
                return interaction.reply({
                    embeds: [new MessageEmbed()
                        .setDescription("**<:fail:1083542064924479549> |  Tienes que ingresar una cantidad a Depositar! | <:fail:1083542064924479549>**")
                        .setColor("e60ad4")
                    ]
                })
            }
            let embed6 = new MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> |  Tienes que ingresar una cantidad a depositar usando Numeros! | <:fail:1083542064924479549>**")
            .setColor("e60ad4")

            if(isNaN(cantidad)) {
                return interaction.reply({embeds: [embed6]})
            
            }
            

            let embed5 = new MessageEmbed()
                .setDescription(`**<:sucess:1083547524717101056> |  Se deposito ${cantidad}$ en tu banco Correctamente! | <:sucess:1083547524717101056>**`)
                .setColor("e60ad4")

            interaction.reply({embeds: [embed5]})
            db.subtract(`money_${user.id}`, cantidad)
            db.add(`bank_${user.id}`, cantidad)

        }
    }
}