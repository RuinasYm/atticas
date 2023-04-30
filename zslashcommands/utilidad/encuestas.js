const Discord = require ("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("encuesta")
    .setDescription("📊 Crea una Encuesta")

    .addChannelOption(o => o.setName("canal").setDescription("el canal donde enviaras la encuesta").setRequired(true))
    .addStringOption(o => o.setName("pregunta").setDescription("la pregunta de la encuesta").setRequired(true))
    .addStringOption(o => o.setName("opcion1").setDescription("opcion de encuenta").setRequired(true))
    .addStringOption(o => o.setName("opcion2").setDescription("opcion de encuenta").setRequired(true))
    .addStringOption(o => o.setName("opcion3").setDescription("opcion de encuesta").setRequired(false))
    .addStringOption(o => o.setName("opcion4").setDescription("opcion de encuesta").setRequired(false))
    .addStringOption(o => o.setName("opcion5").setDescription("opcion de encuesta").setRequired(false))
    .addStringOption(o => o.setName("opcion6").setDescription("opcion de encuesta").setRequired(false))
    .addStringOption(o => o.setName("opcion7").setDescription("opcion de encuesta").setRequired(false))
    .addStringOption(o => o.setName("opcion8").setDescription("opcion de encuesta").setRequired(false))
    .addStringOption(o => o.setName("opcion9").setDescription("opcion de encuesta").setRequired(false))
    .addStringOption(o => o.setName("opcion10").setDescription("opcion de encuesta").setRequired(false)),

   /** 
   *
   *@param {Discord.Client} client
   *@param {Discord.CommandInteraction} interaction
   */
  async run(client, interaction) {
    
    let e = new Discord.MessageEmbed()

    if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

    const pregunta = interaction.options.getString("pregunta")
    const op1 = interaction.options.getString("opcion1")
    const op2 = interaction.options.getString("opcion2")
    const op3 = interaction.options.getString("opcion3")
    const op4 = interaction.options.getString("opcion4")
    const op5 = interaction.options.getString("opcion5")
    const op6 = interaction.options.getString("opcion6")
    const op7 = interaction.options.getString("opcion7")
    const op8 = interaction.options.getString("opcion8")
    const op9 = interaction.options.getString("opcion9")
    const op10 = interaction.options.getString("opcion10")
    const canal = interaction.options.getChannel("canal")

    let embed = new Discord.MessageEmbed()
    .setAuthor("Encuesta ", "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
    .setDescription(`**${pregunta}**`)
    .setColor("e60ad4")
    .setFooter('Gracias por Preferirnos')
    
    
    if(op1) embed.addField(`ﾠ`, ` 1️⃣ ${op1}`)
    if(op2) embed.addField(`ﾠ`, ` 2️⃣ ${op2}`)
    if(op3) embed.addField(`ﾠ`, ` 3️⃣ ${op3}`)
    if(op4) embed.addField(`ﾠ`, ` 4️⃣ ${op4}`)
    if(op5) embed.addField(`ﾠ`, ` 5️⃣ ${op5}`)
    if(op6) embed.addField(`ﾠ`, ` 6️⃣ ${op6}`)
    if(op7) embed.addField(`ﾠ`, ` 7️⃣ ${op7}`)
    if(op8) embed.addField(`ﾠ`, ` 8️⃣ ${op8}`)
    if(op9) embed.addField(`ﾠ`, ` 9️⃣ ${op9}`)
    if(op10) embed.addField(`ﾠ`, `🔟 ${op10}`)

    let m = await canal.send({ embeds: [embed] })

    if(op1) m.react("1️⃣")
    if(op2) m.react("2️⃣")
    if(op3) m.react("3️⃣")
    if(op4) m.react("4️⃣")
    if(op5) m.react("5️⃣")
    if(op6) m.react("6️⃣")
    if(op7) m.react("7️⃣")
    if(op8) m.react("8️⃣")
    if(op9) m.react("9️⃣")
    if(op10) m.react("🔟")

    interaction.reply({ content: `Encuesta creada en ${canal}!`, ephemeral: true})
  }
}