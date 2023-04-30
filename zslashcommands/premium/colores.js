const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const db = require("quick.db");
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("colores")
        .setDescription("🎨 Personaliza el color de tu Rol")
        .addStringOption((option) => {
            return option
                .setName("colores")
                .setDescription("Escoje un color")
                .setChoices(
                    { name: "🌸 → Rosa", value: "1" },
                    { name: "🟢 → Verde", value: "2" },
                    { name: "🟣 → Mora", value: "3" },
                    { name: "🔵 → Azul", value: "4" },
                    { name: "🔴 → Rojo", value: "5" },
                    { name: "🟠 → Naranja", value: "6" },
                    { name: "🔘​ → Gris", value: "7" },
                    { name: "⚫️ → Negro ", value: "8" },
                    { name: "⚪ → Blanco", value: "9" },
                    { name: "🟡 → Amarillo", value: "10" },

                )
                .setRequired(true)
        }),

    async run(client, interaction){

        let e = new Discord.MessageEmbed()

        const nopremium = db.get(`premium_${interaction.member.id}`);
        const c = interaction.options.getString('colores')


        if (nopremium !== true) {

            interaction.reply({ embeds: [e.setDescription(`<:girl2:1016175597027852358> Este comando solo esta disponible para **Boosters**.\nBoostea este servidor para obtener acceso a los comandos [**premium**](https://docs.clubatticus.ml/)`).setAuthor(`Premium`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png").setColor("e60ad4")], ephemeral: true })

        } else {

            if (c) 
            if (c === "1"){ 
                
                interaction.member.roles.remove("1051226269733363742");
                interaction.member.roles.remove("1051226453775228998"); 
                interaction.member.roles.remove("1051226405150670888"); 
                interaction.member.roles.remove("1051226507391029299"); 
                interaction.member.roles.remove("1051226557986906243"); 
                interaction.member.roles.remove("1051226643185795105"); 
                interaction.member.roles.remove("1051226695685898251"); 
                interaction.member.roles.remove("1051226755303747654");  
                interaction.member.roles.remove("1051226883821412442"); 
                interaction.member.roles.add("1050956250864689214"); 
               
                interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1050956250864689214>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "2") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226269733363742"); 
               
                interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226269733363742>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "3") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226453775228998"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226453775228998>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "4") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226405150670888"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226405150670888>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "5") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243");  
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226643185795105"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226643185795105>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "6") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226557986906243"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226557986906243>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "7") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226695685898251"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226695685898251>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "8") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226755303747654"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226755303747654>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "9") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226507391029299"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.add("1051226883821412442"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226883821412442>").setColor("e60ad4")], ephemeral: true }) } else { }
                if (c === "10") { 
                    interaction.member.roles.remove("1050956250864689214");
                    interaction.member.roles.remove("1051226269733363742");
                    interaction.member.roles.remove("1051226453775228998"); 
                    interaction.member.roles.remove("1051226405150670888"); 
                    interaction.member.roles.remove("1051226557986906243"); 
                    interaction.member.roles.remove("1051226643185795105"); 
                    interaction.member.roles.remove("1051226695685898251"); 
                    interaction.member.roles.remove("1051226755303747654");  
                    interaction.member.roles.remove("1051226883821412442"); 
                    interaction.member.roles.add("1051226507391029299"); 
               
                    interaction.reply({ embeds: [e.setDescription("<:girl2:1016175597027852358> Has elejido el color <@&1051226507391029299>").setColor("e60ad4")], ephemeral: true }) } else { }

         } 
        }
     }
    