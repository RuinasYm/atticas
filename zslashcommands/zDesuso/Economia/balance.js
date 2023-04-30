const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("balance")
        .setDescription("💸 mira tu balance o el de un usuario")
        .addUserOption(option => option.setName("usuario").setDescription("Mira el balance de un usuario").setRequired(false)),

    async run(client, interaction, args){

    let user = interaction.options.getUser('usuario') || interaction.member

    let bal = db.fetch(`money_${user.id}`);

    if (bal === null) bal = 0;

    let bank = await db.fetch(`bank_${user.id}`);

    if (bank === null) bank = 0;


    if (user) {
      let moneyEmbed = new MessageEmbed()
      .setAuthor(`Economia`, "https://cdn.discordapp.com/icons/996282321277825104/f3deb65631cd833da7879f788f95ab17.webp")
      .setColor("e60ad4")
      .setDescription(`**Balance de ${user}**\n\n💰 **Global**\n > **Dinero:** \`${bal}\`\n > **Banco** \`${bank}\``)
      interaction.reply({embeds: [moneyEmbed]});
    } else {
      return interaction.reply({
        embeds: [new Discord.MessageEmbed()
            .setDescription("**<:fail:1083542064924479549> | Cuenta no Encontrada! | <:fail:1083542064924479549>**")
            .setColor("e60ad4")
        ]
    })
    }
  }
};