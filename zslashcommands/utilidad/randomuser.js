const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
        .setName("random")
        .setDescription("👤 Elije a un usuario Aleatorio!"),

        
    async run(client, interaction){

        try {

            const memberid = await interaction.guild.members.fetch()
                .then((usuariostotales) => {
                    return [
                        `${usuariostotales.random().id}`
                    ].join('\n');
                });

   const member = await interaction.guild.members.cache.find(m => m.id === `${memberid}`)
  const embed = new Discord.MessageEmbed()

    .setAuthor("Random User", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
    .setThumbnail(member.user.displayAvatarURL({ size: 300, dynamic: true}))
    .setDescription(` > **Usuario:** ${member.user}\n > **ID:** \`${memberid}\`\n > **Union al Servidor:** <t:${(Number(member.joinedAt) / 1000).toFixed(0)}:D>`) 
    .setColor("e60ad4")
    
    

  await  interaction.reply({ embeds: [embed] })

        } catch (e) {
            console.log(e)
        }
  

 }

}