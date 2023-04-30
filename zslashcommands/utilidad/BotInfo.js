const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const { mem, cpu, os } = require('node-os-utils'); //npm i node-os-utils

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bot")
        .setDescription("📣 Mira la informacion del Bot!"),
        
    async run(client, interaction){

const { usedMemMb } = await mem.info();

const embed = new Discord.MessageEmbed()
.setAuthor(`Bot info`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
.setDescription(` > **Nombre:** <@1044756126350196796>\n > **ID:** \`1044756126350196796\`\n > **Version:** \`1.0\`\n > **Creacion:** \`12/6/2022\`\n > **Developer:** <@1001880420138373191>\n > **Ram usada:** \`${usedMemMb} MB\`\n > **Cpu usado:** \`${await cpu.usage()} %\`\n > **Ping:** \`${client.ws.ping} ms\`\n > **Prefijo:** \`!\`\n > **Web:** [**Click Aqui**](https://docs.clubatticus.ml/)`)
.setColor("e60ad4")


interaction.reply({ embeds: [embed] })   
  }

}
 
