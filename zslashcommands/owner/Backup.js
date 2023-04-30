const { DiscordAPIError } = require('@discordjs/rest')
const backup = require('discord-backup')
backup.setStorageFolder(__dirname + "/backups/")
const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const { Permissions } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("backup")
        .setDescription("💿 Utiliza un Backup!")
        .addStringOption((option) => {
            return option
                .setName("opciones")
                .setDescription("Utiliza un Backup")
                .setChoices(
                    { name: "💿 → Crea un Backup", value: "1" },
                    { name: "💿 → Carga un Backup", value: "2" },
                    { name: "💿 → Ve la informacion de un Backup", value: "3"},
                    { name: "💿 → Elimina un Backup", value: "4" }

                )
                .setRequired(true)
        })
        .addStringOption((option) => {
            return option
                .setName("id")
                .setDescription("Utiliza la id de un Backup")
                .setRequired(false)
        }),
            
        async run(client, interaction){
        
            let e = new Discord.MessageEmbed()
            let selecion = interaction.options.getString("opciones")

            if(interaction.member.id !== "1001880420138373191") return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  No tienes suficientes permisos para ejecutar este Comando! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
    
        
        if (selecion) {
        if (selecion === "1") { interaction.reply({ embeds: [e.setDescription(`**<a:loading:1042597104490655794> | Creando backup ${interaction.member}**`).setAuthor(`Backup`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png").setColor("e60ad4") ], ephemeral: true })
        backup.create(interaction.guild, {

            jsonBeautify: true 

        }).then(async backupdata => {

               interaction.channel.send({
                  embeds: [new Discord.MessageEmbed()
                    .setAuthor(`Backup`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                    .setDescription(` > **Backup creada Correctamente ${interaction.member}\n > Backup ID:** \`${backupdata.id}\`\n > **Carga la backup con:** \`!Backup load ${backupdata.id}\``)
                    .setColor("e60ad4")
                    
                    
                  ]
                })

        }) } else { }
        
    if (selecion === "2") { 
        let backupID = interaction.options.getString('id')
        if (!backupID) return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  Tienes que indicar la id de un backup a Cargar! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })

        backup.fetch(backupID).then(async () => {

            backup.load(backupID, interaction.guild).then(() => {

                clearGuildBeforeRestore: true,

                backup.remove(backupID)
            })

        }).catch((err) => {
            return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  La id del backup indicada no Existe! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
        })} } else { }
         if (selecion === "3") { 
            let backupID = interaction.options.getString('id')
            if (!backupID) return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  Tienes que indicar la id de un backup para ver su Informacion! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
          
             backup.fetch(backupID).then((backupinfo) => {
           
            
                const date = new Date(backupinfo.data.createdTimestamp);
                const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
                const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`Backup`, "https://cdn.discordapp.com/attachments/1052343306538975282/1082126900333396079/b83824611e0c9ea5e962dfc1544b1a0e.png")
                    .setColor("e60ad4")
                    .setDescription(` > **Backup ID:** \`${backupinfo.id}\`\n > **Server ID:** \`${backupinfo.data.guildID}\`\n > **Tamaño** \`${backupinfo.size}kb\`\n > **Creacion:** \`${formatedDate}\``)
                    
                    
                interaction.reply({embeds: [embed] });
            }).catch((err) => {
                // if the backup wasn't found
                return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  La id del backup indicada no Existe! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
            }) } else { }
            if (selecion === "4") {
                let backupID = interaction.options.getString('id')
                if (!backupID) return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  Tienes que indicar la id del backup que quieres Eliminar! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
              
                backup.remove(backupID).then((backupinfo) => {

                interaction.reply({
                    embeds: [new Discord.MessageEmbed()
                        
                        .setDescription("**<:sucess:1083547524717101056> | Backup removida Correctamente! | <:sucess:1083547524717101056>**")
                        .setColor("e60ad4")

                    ]
                })
            }).catch((err) => {
                return interaction.reply({ embeds: [e.setDescription("**<:fail:1083542064924479549> |  La id del backup indicada no Existe! | <:fail:1083542064924479549>**").setColor("e60ad4")], ephemeral: true })
            })  } else { }
                
            }
            
        }
    
    
