//perfectionar diseño embed e testear funciones

const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    //developer: true, //esto es opcional, solo habilitar si tienes servidor para pruebas.
    data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("🧹 Elimina mensajes de un Canal")
    //opción de número
    .addNumberOption((Options) =>
    Options
    .setName("cantidad")
    .setDescription("Numero de mensajes a borrar")
    .setRequired(true))
    //opción de usuario
    .addUserOption((Options) => 
    Options
    .setName("usuario")
    .setDescription("Usuario a borrar mensajes")
    .setRequired(false)),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction
     */
     async run(client, interaction){

        let e = new Discord.MessageEmbed()

        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })


        
        try {
            
            const { channel, options } = interaction;

            const Cantidad = options.getNumber("cantidad");
            const Usuario = options.getMember("usuario");

            const Mensaje = await channel.messages.fetch();

            if(Cantidad > 100)
            return interaction.reply({content: `**<:fail:1083542064924479549> No puedes eliminar mas de 100 mensajes a la Vez!<:fail:1083542064924479549>**`, ephemeral: true});

            const Respuesta = new MessageEmbed()
            .setColor("000000")
            if(Usuario) {
                let i = 0;
                const filtrar = [];
                (await Mensaje).filter((m) => {
                    if(m.author.id === Usuario.id && Cantidad > i) {
                        filtrar.push(m);
                        i++;
                    }
                })

                await channel.bulkDelete(filtrar, true).then(mensaje => {
                    interaction.reply({ embeds: [e.setDescription(`**Elimine \`${mensaje.size}\` mensajes de ${Usuario}**`).setColor("e60ad4")], ephemeral: true })
                })
            } else {
                await channel.bulkDelete(Cantidad, true) .then(mensaje => {
                    interaction.reply({ embeds: [e.setDescription(`**Elimine \`${mensaje.size}\` mensajes de este Canal**`).setColor("e60ad4")], ephemeral: true })
                })
            }

        } catch (error) {
            console.log(error)
        }

     }

}
