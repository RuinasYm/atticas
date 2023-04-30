const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const ms = require("ms")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("slowmode")
        .setDescription("🧊 Activa el modo lento en un Canal!")
        .addStringOption(option => option.setName("tiempo").setDescription("Indica el tiempo de duracion en Milisegundos").setRequired(true)),
        
    async run(client, interaction){
        
        let e = new Discord.MessageEmbed()

        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
     
        const tiempo = interaction.options.getString("tiempo")  

        const raw = tiempo;
        const milliseconds = ms(raw);

        if(isNaN(milliseconds)) return interaction.reply({ embeds: [e.setDescription(`**<:fail:1083542064924479549> | Indica un tiempo en milisegundos Valido! | <:fail:1083542064924479549>**`).setColor("e60ad4")], ephemeral: true })
        if(milliseconds < 1000) return interaction.reply({ embeds: [e.setDescription(`**<:fail:1083542064924479549> | El tiempo minimo de slowmode es de \`1 segundo\`! | <:fail:1083542064924479549>**`).setColor("e60ad4")], ephemeral: true })
        interaction.reply({ embeds: [e.setDescription(`**<:sucess:1083547524717101056> | Slowmode activado correctamente ${interaction.member}! | <:sucess:1083547524717101056>**`).setColor("e60ad4")], ephemeral: true })
    }
}
