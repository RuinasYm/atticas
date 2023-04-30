const ms = require("parse-ms");
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("inventario")
        .setDescription("💸 Mira tu inventario o el de un usuario")
        .addUserOption(usuario => usuario.setName('usuario').setDescription('Ingresa un usuario').setRequired(true)), // Creamos la opcion para mencionar un usuario y que sea obligatorio
    

    async run(client, interaction, args){

        let user =  interaction.options.getUser('usuario') || interaction.member

        let clasealta = db.fetch(`clasealta_${user}`)
        if (clasealta === null || clasealta === false) clasealta = 0;
        let clasemedia = db.fetch(`clasemedia_${user}`);
        if (clasemedia === null || clasemedia === false) clasemedia = 0;
        let clasebaja = db.fetch(`clasebaja_${user}`);
        if (clasebaja === null || clasebaja === false) clasebaja = 0;
        let money = db.fetch(`money_${user.id}`)
        if (money === null || money === false) money = 0;

        let embed = new Discord.MessageEmbed()
        .setAuthor(`Economia`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
        .setColor("e60ad4")
        .setDescription(`**Inventario de ${user}**\n\n**<@&1050534479451656202>** \nCantidad: \`${clasealta}\`\n\n**<@&1050535334229848074>** \nCantidad: \`${clasemedia}\`\n\n**<@&1050534804371804190>** \nCantidad:\`${clasebaja}\`\n\n > **Dinero:**  \`${money}\` :coin: `)

        interaction.reply({ embeds: [embed] })


    

    }
}