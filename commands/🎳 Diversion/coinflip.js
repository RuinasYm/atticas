const Discord = require('discord.js');//definismo discord

module.exports = {
    name: "coinflip",//este es el nombre del comando
    alias: ["lanzarmoneda"],//este es el alias del comando
    desc: "Sirve para lanzar una moneda",//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    uso: "!coinflip",//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    permisos: ["SEND_MESSAGES"],//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    permisos_bot: ["ADMINISTRATOR"],//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    valoracion: "⭐⭐⭐⭐⭐",//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    async execute(client, message, args) {

  const moneda = [//estas son las fraces motivadoras, las puedes personalizar a tu gusto
  "Cara <:cara:1090430287042850917>",
  "Cruz <:cruz:1090430284907941981>"


];
    const img = [
        "https://cdn.discordapp.com/attachments/1078750371117289607/1090431430078775316/cara.png",
        "https://cdn.discordapp.com/attachments/1078750371117289607/1090431429814538390/cruz.png"

    ];
    let monedaRandom = Math.floor(Math.random() * moneda.length);
    let monedas = moneda[monedaRandom];
    let imagenes = img[monedaRandom];
    
        const embed = new Discord.MessageEmbed()
        .setAuthor({name: "La moneda cayo!", iconURL: client.user.displayAvatarURL({dynamic: true})})//Este es el titulo superior del mensaje
        .setThumbnail(imagenes)
        .setDescription(`> **Pocision:**\n> ${monedas}`)//Aca van las monedas motivadoras que se enviaran
        .setColor("e60ad4") //Esto es opcional tambien, si quieres le puedes poner un color pero siempre todo en mayuscula y que sea en ingles el color, o tambien puedes poner un Hexcolor
        ; //para que le salga la hora que lo ejecuto

        
        message.reply({ embeds: [embed] })//Respondemos al comando con el embed creado, puedes usar message.channel.send si no quieres responder al comando.

    }

}