const ms = require("parse-ms");
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db");

        var trabajos = [
            "Doctor",
            "Herrero",
            "Minero",
            "Dentista",
            "Programador",
            "Panadero",
            "Policia",
            "Bombero",
            "Periodista"
        ];

        module.exports = {
            data: new SlashCommandBuilder()
                .setName("work")
                .setDescription("💸 Trabaja y gana dinero"),
        
            async run(client, interaction, args){
                let trabajo = trabajos[Math.floor(Math.random() * trabajos.length)];
        
                let user = interaction.member
                let author = await db.fetch(`work_${user.id}`)
                let bal = db.fetch(`money_${user.id}`)
                let timeout = 3600000;
        
                if (author !== null && timeout - (Date.now() - author) > 0) {
                    let time = ms(timeout - (Date.now() - author));
        
                    let timeEmbed = new MessageEmbed()
                    .setDescription(`**<:fail:1083542064924479549> |  Ya trabajaste mucho Descansa!, Podras volver a trabajar en \`${time.minutes}\`m \`${time.seconds}\`s | <:fail:1083542064924479549>**`)
                    .setColor("e60ad4")
                    interaction.reply({embeds: [timeEmbed]})
                } else {
                    let amount = Math.floor(Math.random() * 80) + 1;
                    let embed1 = new MessageEmbed()
                    .setAuthor(`Economia`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
                    .setColor("e60ad4")
                    .setDescription(`__**Trabajaste de ${trabajo} y obtuviste ${amount}$**__\n > **Balance:** ${bal}$`)
                    interaction.reply({embeds: [embed1]})
        
                    db.add(`works_${user.id}`, 1)
                    db.add(`money_${user.id}`, amount)
                    db.set(`work_${user.id}`, Date.now())
                };
            }
        };