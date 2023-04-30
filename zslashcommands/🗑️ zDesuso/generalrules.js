const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "pruebita1",
  alias: [],

  async execute (client, message, args) {

    const embed = new Discord.MessageEmbed()
    .setColor("e60ad4")
    .setDescription(` > **ㅤ<a:us:1069691928473522287> - General Rules - <a:us:1069691928473522287>\n > └──────── •✧✧• ────────┘**\n\n > **ᗢ﹒︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿ᗢ**\n > **⟡﹒1.-**\`>\`<:1051239767439851660:1069691930809737236>\`<\` *Be respectful, do not insult, do not harass users and do not incite toxicity.＋*\n\n> **⟡﹒2.-**\`>\`<:932285032574353448:1069691932437135390>\`<\` *Do not post explicit or unpleasant content (Pedophilia, Zoophilia, Gore, Etc).＋*\n\n> **⟡﹒3.-**\`>\`<:1052310191468707841:1069691935545110648>\`<\` *Do not debate or discuss issues such as racial, religious and political that is not according to the theme of the server.＋*\n\n> **⟡﹒4.-**\`>\`<:993061357203226624:1069691938346913832>\`<\` *Do not impersonate another person by hiding an identity.＋*\n\n> **⟡﹒5.-**\`>\`<:black:1069696159561560174>\`<\` *Do not publish private information such as address, telephone number, etc.＋*\n\n> **⟢ ﹒6.-**\`>\`<a:info:1069691940196585512>\`<\` *Do not flash trust with users you barely know, if you bother them they can report you.＋*\n\n> **⟢ ﹒7.-**\`>\`📌\`<\` *The use of multimedia images or commands in the other channels will only be limited to two or three, if they are extended to more it will be a sanction, only in chat commands are unlimited.＋*\n\n> **⟢ ﹒8.-**\`>\`<:971771850839441458:1069691946680983663>\`<\` *Avoid spamming by sending links, social networks, servers, as well as avoiding making comments on invitations to your own servers.＋*\n\n> **⟢ ﹒9.-**\`>\`<:1004870010193313822:1069691948421632000>\`<\` *Avoid the flood and wall text that is not about the topic that is being discussed in the social channels of the server or it will be a sanction.＋*\n\n> **⟢ ﹒10.-**\`>\`<:889965765472710786:1069691950913032192>\`<\` *Avoid insulting the users of the English community with the letter "Ñ" as this can generate controversy and a problem with users, if you do not comply with this rule you will be warned/punished and muted for 1 hour.＋*\n\n> **⟢ ﹒11.-**\`>\`🔞\`<\` *Violating this rule is not only morally dubious, but it is a violation of the Discord ToS and puts the entire community at risk. If you're looking to view and share images of celebrities, notable people, and/or IRLs (in real life: that is, anyone you know personally); this is probably not the server for you. Our focus is pornography and erotic content created by sex workers.*\n**ᗢ﹒︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿ᗢ**`)
    .setImage('https://cdn.discordapp.com/attachments/1052343306538975282/1069741610469957743/9.png')
    message.channel.send({embeds: [embed] })
  }
}
