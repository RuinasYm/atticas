const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "pruebita",
  alias: [],

  async execute (client, message, args) {

    const embed = new Discord.MessageEmbed()
    .setColor("e60ad4")
    .setDescription(` > **ㅤ<a:es:1069691926334423081> - Reglas Generales - <a:es:1069691926334423081>\n > └──────── •✧✧• ────────┘**\n\n > **ᗢ﹒︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿ᗢ**\n > **⟡﹒1.-**\`>\`<:1051239767439851660:1069691930809737236>\`<\` *Ser respetuoso, no insultar, no acosar a los usuarios y no incitar a la toxicidad.＋*\n\n> **⟡﹒2.-**\`>\`<:932285032574353448:1069691932437135390>\`<\` *No publicar contenido explicito o desagradable (Pedofilia, Zoofilia, Gore, Etc).*＋\n\n> **⟡﹒3.-**\`>\`<:1052310191468707841:1069691935545110648>\`<\` *No debatir o discutir sobre temas raciales, religiosos y políticos que no es acorde al tema del servidor.＋*\n\n> **⟡﹒4.-**\`>\`<:993061357203226624:1069691938346913832>\`<\` *No hacerte pasar por otra persona ocultando una identidad.＋*\n\n> **⟡﹒5.-**\`>\`<:black:1069696159561560174>\`<\` *No publicar información privada ya sea dirección, número telefónico, etc.＋*\n\n> **⟢ ﹒6.-**\`>\`<a:info:1069691940196585512>\`<\` *No flashear confianza con usuarios que apenas conozcas, si los incomodas pueden reportarte.＋*\n\n> **⟢ ﹒7.-**\`>\`📌\`<\` *El uso de imágenes multimedia o comandos en los demás canales, solo se limitara a dos o tres, si se extienden a mas será una sanción, solo en chat comandos son ilimitados.＋*\n\n> **⟢ ﹒8.-**\`>\`<:971771850839441458:1069691946680983663>\`<\` *Evitar hacer spam ya sea mandando links, de redes sociales, servidores , al igual evitar hacer comentarios sobre invitaciones a servidores propios.＋*\n\n> **⟢ ﹒9.-**\`>\`<:1004870010193313822:1069691948421632000>\`<\` *Evitar el flood y wall text que no sea sobre el tema que se este hablando en los canales sociales del servidor o será una sanción.＋*\n\n> **⟢ ﹒10.-**\`>\`<:889965765472710786:1069691950913032192>\`<\` *Evitar insultar a los usuarios de la comunidad inglesa con la letra " Ñ " ya que esto puede generar polémica y un problema con los usuarios, si no cumples con esta regla serás warneado/sancionado y muteado 1 hora.＋*\n\n> **⟢ ﹒11.-**\`>\`🔞\`<\` *Violar esta regla no solo es moralmente dudoso, sino que es una violación de Discord ToS y pone en riesgo a toda la comunidad. Si está buscando ver y compartir imágenes de celebridades, personas destacadas y/o IRL (en la vida real: es decir, cualquier persona que conozca personalmente); probablemente este no sea el servidor para ti. Nuestro enfoque es la pornografía y el contenido erótico creado por trabajadoras sexuales.*\n**ᗢ﹒︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿ᗢ**`)
    .setImage('https://cdn.discordapp.com/attachments/1052343306538975282/1069741610469957743/9.png')
    message.channel.send({embeds: [embed] })
  }
}
