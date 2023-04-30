const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("confesion")
        .setDescription("🙊 Envia una Confesion!")
        .addStringOption(o => o.setName("contenido").setDescription("Escribe una Confesion").setRequired(true))
        .addBooleanOption(oa => oa.setName("anonimo").setDescription("Establece si la confesion sera Anonima!").setRequired(true)),
        
    async run(client, interaction){

let e = new Discord.MessageEmbed()

const contenido = interaction.options.getString("contenido")
const anonimo = interaction.options.getBoolean("anonimo")

if(anonimo === false){
    const embed = new Discord.MessageEmbed()
    .setDescription(` > ${contenido}`)
    .setAuthor({name: `Confesion de ${interaction.user.username}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true})})
    .setColor("e60ad4")
    

    await client.channels.cache.get("1076251647501680760").send({embeds: [embed] })

}

if(anonimo === true){
    const embed1 = new Discord.MessageEmbed()
    .setDescription(` > ${contenido}`)
    .setAuthor({name: `Confesion Anonima`, iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setColor("e60ad4")
    

    await client.channels.cache.get("1076251647501680760").send({embeds: [embed1] })


}

await interaction.reply({ embeds: [e.setDescription(`[Confession](https://discord.com/channels/1067233169184657438/1076251647501680760) enviada correctamente`).setColor("e60ad4")], ephemeral: true })    
    
}

}

