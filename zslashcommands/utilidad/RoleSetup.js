 //mejorar embed
const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    
    .setName('role') // Seteamos el nombre
    .setDescription(' ✨ Añade o remueve un rol a un usuario') // La description
    .addStringOption((option) => {
        return option
            .setName("selecciona")
            .setDescription("✨ → Haz una selecion")
            .setChoices(
                { name: "✨ → Agregar Rol", value: "1" },
                { name: "✨ → Remover Rol", value: "2" },
            )
            .setRequired(true)
      })
    .addUserOption(usuario => usuario.setName('usuario').setDescription('Asignale el rol al usuario').setRequired(true)) // Creamos la opcion para mencionar un usuario y que sea obligatorio
    .addRoleOption(role => role.setName('role').setDescription('Asigna el rol').setRequired(true)), // Creamos la otra opcion para poder mencionar el rol y que sea obligatorio.
    async run(client, interaction){

        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
        let c = interaction.options.getString("selecciona")
        let Target = interaction.options.getMember('usuario')
        let role = interaction.options.getRole('role')
        let e = new Discord.MessageEmbed()

        
        if (c) {
            if (c === "1") { 
                if(interaction.member.roles.highest.comparePositionTo(Target.roles.highest) <= 0){ // Si el rol es mas alto que el del usuario.
                    return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedes agregarle este rol a este usuario! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
                }
                if(interaction.guild.me.roles.highest.comparePositionTo(Target.roles.highest) <= 0){ // Si el rol es mas alto que el bot.
                    return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedo agregarle este rol a este usuario! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
                 }
                if(interaction.guild.me.roles.highest.comparePositionTo(role) <= 0){ // Si el rol no puee ser aregado.
                    return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedo agregar este rol! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
                 }
            Target.roles.add(role.id);
            return interaction.reply({ embeds: [e.setDescription(`<:girl2:1016175597027852358> Has añadido el rol ${role} al usuario ${Target} `).setColor("e60ad4")], ephemeral: true })
                
            
                           
                
             } else { }
            if (c === "2") {             
            Target.roles.remove(role.id)
            if(interaction.member.roles.highest.comparePositionTo(Target.roles.highest) <= 0){ // Si el rol es mas alto que el del usuario.
                return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedes remover este rol a este usuario! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
            }
            if(interaction.guild.me.roles.highest.comparePositionTo(Target.roles.highest) <= 0){ // Si el rol es mas alto que el bot.
                return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedo remover este rol a este usuario! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
             }
            if(interaction.guild.me.roles.highest.comparePositionTo(role) <= 0){ // Si el rol no puee ser aregado.
                return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No puedo remover este rol! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
             }
            return interaction.reply({ embeds: [e.setDescription(`<:girl2:1016175597027852358> Has removido el rol ${role} al usuario ${Target} `).setColor("e60ad4")], ephemeral: true })
                
            

                           
                
             } else { }
        } else { }}
}