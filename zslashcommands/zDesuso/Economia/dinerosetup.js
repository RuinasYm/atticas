const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dinero")
        .setDescription("💸 → añade o remueve dinero a un usuario!")
        .addStringOption((option) => {
            return option
                .setName("opciones")
                .setDescription("💸 → Dinero")
                .setChoices(
                    { name: "💸 → Agregar Dinero", value: "1" },
                    { name: "💸 → Remover Dinero", value: "2" }

                )
                .setRequired(true)
        })
        .addUserOption(option => option.setName("usuario").setDescription("Ingresa un Usuario").setRequired(true))
        .addStringOption(option => option.setName('cantidad').setDescription('Ingresa una cantidad').setRequired(true)),
        
    async run(client, interaction){

        let e = new Discord.MessageEmbed()

        if(interaction.member.id !== "598270518009004062") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

        let user = interaction.options.getUser('usuario')
        let Cantidad = interaction.options.getString('cantidad')
        let selecion = interaction.options.getString("opciones")

        if (selecion) {
            if (selecion === "1") { 
                db.add(`money_${user.id}`, Cantidad)
                let bal = db.fetch(`money_${user.id}`)
        
                let moneyEmbed = new MessageEmbed()
                .setAuthor({ name: 'Economia', iconURL: 'https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp', url: '' })
                .setColor("e60ad4")
                .setDescription(`__**Se añadieron ${Cantidad}$ a:**__\n > **Usuario:** ${user}\n > **Balance:** ${bal}`)
                interaction.reply({embeds: [moneyEmbed]}) } else { }
            
        if (selecion === "2") {         
        db.subtract(`money_${user.id}`, Cantidad)
        let bal2 = await db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
        .setDescription(`**<:sucess:1083547524717101056> |  Se elimino ${Cantidad}$ a ${user} Balance: ${bal2}! | <:sucess:1083547524717101056>**`)
        .setColor("e60ad4")
        interaction.reply({embeds: [moneyEmbed]}) } }

    }
}
