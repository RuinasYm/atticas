const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription("💎 Crea un embed personalizado")
        .addChannelOption((option) => {
            return option
                .setName("canal")
                .setDescription("Elije el canal donde se enviara el embed")
                .addChannelTypes(0)
                .setRequired(true)
        })
        .addStringOption((option) => {
            return option
                .setName("titulo")
                .setDescription("Agrega un titulo al embed")
                .setRequired(true)
        })
        .addStringOption((option) => {
            return option
                .setName("descripción")
                .setDescription("Agrega una descripcion al embed")
                .setRequired(false)
        })
        .addStringOption((option) => {
            return option
                .setName("thumbnail")
                .setDescription("Agrega una miniatura al embed")
                .setRequired(false)
        })
        .addStringOption((option) => {
            return option
                .setName("imagen")
                .setDescription("Agrega una imagen al embed")
                .setRequired(false)
        })
        .addStringOption((option) => {
            return option
                .setName("footer")
                .setDescription("Agrega un pie de pagina al embed")
                .setRequired(false)
        })
        .addStringOption((option) => {
            return option
                .setName("color")
                .setDescription("Elije un color para el embed")
                .setChoices(
                    { name: "🔵 → Azul Cielo", value: "#CCEEFF" },
                    { name: "⚫️ → Negro", value: "#000000" },
                    { name: "⚪ → Gris", value: "#808080" },
                    { name: "🟣 → Morado", value: "#800080" },
                    { name: "💮 → Rosado", value: "#e60ad4" },
                    { name: "🟢 → Verde", value: "#00FF00" },
                    { name: "🟡 → Amarillo", value: "#FFFF00" },
                    { name: "🔵​ → Azul", value: "#0000FF" },
                    { name: "🔴 → Rojo", value: "#FF0000" },
                    { name: "🌈 → Random", value: "RANDOM" }
                )
                .setRequired(false)
        })
        .addStringOption((option) => {
            return option
                .setName("timestamp")
                .setDescription("Agrega la hora al embed")
                .setChoices(
                    { name: "Si", value: "s" },
                    { name: "No", value: "n" }
                )
                .setRequired(false)
        })
        .addStringOption((option) => {
            return option
                .setName("autor")
                .setDescription("Agrega el author al embed")
                .setChoices(
                    { name: "Si", value: "s" },
                    { name: "No", value: "n" }
                )
                .setRequired(false)
        })
    ,
    async run(fur, interaction) {

        let e = new MessageEmbed()
        let e2 = new MessageEmbed()

        if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

        let canal = interaction.options.getChannel("canal")
        let t = interaction.options.getString("titulo")
        let d = interaction.options.getString("descripción")
        let th = interaction.options.getString("thumbnail")
        let img = interaction.options.getString("imagen")
        let tim = interaction.options.getString("timestamp")
        let f = interaction.options.getString("footer")
        let c = interaction.options.getString("color")
        let aut = interaction.options.getString("autor")

        if (t) {
            e.setTitle(t)
        } else { }

        if (d) {
            if (d.length > 2048) return interaction.reply({ embeds: [e2.setDescription("**La __Descripcion__ sobrepasa los 2048 caracteres**").setColor("e60ad4")], ephemeral: true })
            e.setDescription(d)
        } else { }

        if (th) {
            if (!th.startsWith("https://")) return interaction.reply({ embeds: [e2.setDescription("**Ingresa una URL valido, Miniatura**").setColor("e60ad4")], ephemeral: true })
            e.setThumbnail(th)
        } else { }

        if (img) {
            if (!img.startsWith("https://")) return interaction.reply({ embeds: [e2.setDescription("**Ingresa una URL valido, Imagen**").setColor("e60ad4")], ephemeral: true })
            e.setImage(img)
        } else { }

        if (tim) {
            if (tim === "s") {
                e
            } else if (tim === "n") { }
        } else { }

        if (aut) {
            if (aut === "s") {
                e.setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            } else if (aut === "n") { }
        } else { }

        if (f) {
            if (f.length > 256) return interaction.reply({ embeds: [e2.setDescription("**El _Footer__ sobrepasa los 256 caracteres!**").setColor("e60ad4")], ephemeral: true })
            e.setFooter({ text: f })
        } 

        if (c) {
            if (c === "#CCEEFF") { e.setColor("#CCEEFF") } else { }
            if (c === "#000000") { e.setColor("#000000") } else { }
            if (c === "#808080") { e.setColor("#808080") } else { }
            if (c === "#800080") { e.setColor("#800080") } else { }
            if (c === "#e60ad4") { e.setColor("#e60ad4") } else { }
            if (c === "#00FF00") { e.setColor("#00FF00") } else { }
            if (c === "#FFFF00") { e.setColor("#FFFF00") } else { }
            if (c === "#0000FF") { e.setColor("#0000FF") } else { }
            if (c === "#FF0000") { e.setColor("#FF0000") } else { }
            if (c === "RANDOM") { e.setColor("RANDOM") } else { }
        } else { }

        let m = await canal.send({ embeds: [e] })
  
        interaction.reply({ embeds: [e2.setDescription("**Se envio correctamente el **" + `[embed](${m.url})`).setColor("e60ad4")], ephemeral: true })
    }
}