const discord = require('discord.js')
const { ContextMenuCommandBuilder } = require('@discordjs/builders')
const Item = require('../../modelos/item');
const ecoSchema = require('../../modelos/economia');

module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName('Mochila')
    .setType(2),

    async run(client, interaction) {
        const user = await interaction.guild.members.fetch(interaction.targetId)
        if(user.user.bot) return interaction.reply({content: "<:coffe:1085588495172632638> Los bots no registran perfiles.", ephemeral: true});
        if (!user) return interaction.reply({content: "Usuario no encontrado <:coffe:1085588495172632638>", ephemeral: true})
        let userData = await ecoSchema.findOne({ userID: user.user.id });
        if (!userData) {
          let newdata = new ecoSchema({
            userID: user.user.id,
            inventario: []
          });
    
          await newdata.save();
          userData = await ecoSchema.findOne({ userID: user.user.id });
        }
    
        const items = await Item.find();
        const userItems = {};
        for (const item of items) {
          const count = userData.inventario.filter(itemId => itemId === item._id.toString()).length;
          if (count > 0) {
            userItems[item._id.toString()] = {
              name: item.name,
              description: item.description,
              count
            };
          }
        }
    
        if (Object.keys(userItems).length === 0) {
          return interaction.reply({content: 'Mochila sin items <:coffe:1085588495172632638>.', ephemeral: true});
        }
    
        const itemList = Object.entries(userItems).map(([itemId, itemData], index) => `\`${index + 1}\` ${itemData.name} (x${itemData.count})`);
    
        const embed = new discord.MessageEmbed()
          .setAuthor({name: `Mochila de ${user.user.username}`, iconURL: user.displayAvatarURL({ dynamic: true })})
          .setDescription(`Puedes comprar un item escribiendo: \`!shop\`\n\n**Lista de items**\n  ${itemList.join('\n')}`)
          .setColor("e60ad4")
          .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
    
        interaction.reply({ embeds: [embed] });
    }
    
}