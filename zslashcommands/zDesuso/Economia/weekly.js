const ms = require("parse-ms");
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("weekly")
        .setDescription("💸 Recibe tu recompensa semanal"),

    async run(client, interaction, args){

        const nopremium = db.get(`premium_${interaction.member.id}`);

        if (nopremium !== true) {

            interaction.reply({
                embeds: [new MessageEmbed()
             .setAuthor("Premium", "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
            .setColor("e60ad4")
            .setDescription(`<:girl2:1016175597027852358> Este comando solo esta disponible para **Boosters**.\nBoostea este servidor para obtener acceso a los comandos [**premium**](https://docs.clubatticus.ml/)`)
                ]
            })

        } else {

            let user = interaction.member;
        let timeout = 2629750000;
        let amount = 5000;
        let bal = db.fetch(`money_${user.id}`)

        let weekly = await db.fetch(`weekly_${user.id}`);

        if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
            let time = ms(timeout - (Date.now() - weekly));

            let timeEmbed = new MessageEmbed()
            .setDescription(`**<:fail:1083542064924479549> |  Ya reclamaste tu recompensa del mes!, Podras volver a reclamarla en \`${time.days}\`d \`${time.hours}\`h \`${time.minutes}\`m \`${time.seconds}\`s | <:fail:1083542064924479549>**`)
            .setColor("e60ad4")
            interaction.reply({embeds: [timeEmbed]})
        } else {
            let moneyEmbed = new MessageEmbed()
            .setAuthor(`Economia`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
            .setColor("e60ad4")
            .setDescription(`__**Reclamaste tu recompensa del mes y obtuviste ${amount}$**__\n > **Balance:** ${bal}$`)
            interaction.reply({embeds: [moneyEmbed]})
            db.add(`money_${user.id}`, amount)
            db.set(`weekly_${user.id}`, Date.now())


        }

        }

        
    }
}