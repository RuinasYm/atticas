const ms = require("parse-ms");
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("beg")
        .setDescription("💸 mendiga y gana dinero"),

    async run(client, interaction, args){
        let user = interaction.member
        let bal = db.fetch(`money_${user.id}`)

        let timeout = 3600000;
        let amount = 20;

        let beg = await db.fetch(`beg_${user.id}`);

        if (beg !== null && timeout - (Date.now() - beg) > 0) {
            let time = ms(timeout - (Date.now() - beg));

            let timeEmbed = new MessageEmbed()
            .setDescription(`**<:fail:1083542064924479549> |  Oyee ya mendigaste mucho descansa!, Podras volver a mendigar en ${time.minutes}m ${time.seconds}s | <:fail:1083542064924479549>**`)
            .setColor("e60ad4")
            interaction.reply({embeds: [timeEmbed]})
        } else {
            let moneyEmbed = new MessageEmbed()
            .setAuthor(`Economia`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
            .setColor("e60ad4")
            .setDescription(`__**Mendigaste por 1 hora y obtuviste ${amount}$**__\n > **Balance:** ${bal}$`)
            interaction.reply({embeds: [moneyEmbed]})
            db.add(`money_${user.id}`, amount)
            db.add(`begs_${user.id}`, 1)
            db.set(`beg_${user.id}`, Date.now())


        }
    }
};