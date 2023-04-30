const ms = require("parse-ms");
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("daily")
        .setDescription("💸 Recibe tu recompensa diaria"),

    async run(client, interaction, args){
        let user = interaction.member;
        let bal = db.fetch(`money_${user.id}`)

        let timeout = 86400000;
        let amount = 500;

        let daily = await db.fetch(`daily_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            let timeEmbed = new MessageEmbed()
            .setDescription(`**<:fail:1083542064924479549> | Ya reclamaste tu recompensa diaria!, Podras volver a reclamarla en \`${time.hours}\`h \`${time.minutes}\`m \`${time.seconds}\`s | <:fail:1083542064924479549>**`)
            .setColor("e60ad4") 
            interaction.reply({embeds: [timeEmbed]})
        } else {
            let moneyEmbed = new MessageEmbed()
            .setAuthor(`Economia`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
            .setColor("e60ad4")
            .setDescription(`__**Reclamaste tu recompensa diaria y obtuviste ${amount}$**__\n > **Balance:** ${bal}$`)
            interaction.reply({embeds: [moneyEmbed]})
            db.add(`money_${user.id}`, amount)
            db.set(`daily_${user.id}`, Date.now())


        }
    }
}