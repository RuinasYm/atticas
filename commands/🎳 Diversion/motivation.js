const Discord = require('discord.js');//definismo discord

module.exports = {
    name: "motivation",//este es el nombre del comando
    alias: ["motivacion"],//este es el alias del comando
    desc: "Sirve para mandar un mensaje motivador",//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    uso: "!motivacion",//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    permisos: ["SEND_MESSAGES"],//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    permisos_bot: ["ADMINISTRATOR"],//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    valoracion: "⭐⭐⭐⭐⭐",//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    async execute(client, message, args) {

  const frase = [//estas son las fraces motivadoras, las puedes personalizar a tu gusto
  "La vida es una aventura emocionante, ¡asegúrate de vivirla al máximo!",
  "Nunca es demasiado tarde para ser lo que quieres ser",
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito",
  "La vida es un regalo, ¡no la dejes pasar!",
  "La perseverancia es la madre de todas las cualidades",
  "El fracaso es simplemente la oportunidad de comenzar de nuevo con más experiencia",
  "La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir adelante",
  "No te rindas, el fracaso es solo una oportunidad para comenzar de nuevo con más experiencia"


];

  const img = [//estas son las imagenes motivadoras, las puedes personalizar a tu gusto
    "https://pm1.narvii.com/6573/7a48fd580cfcee796669d1414e055247502f5eb2_hq.jpg",
    "https://wc.wallpaperuse.com/wallp/46-465576_s.jpg",
    "https://i.pinimg.com/originals/9b/27/95/9b27958bad64aaf2de043b0ebdf63310.jpg",
    "https://pm1.narvii.com/6626/a73df3afb14a61710b50015847507037988d9a52_hq.jpg",
    "https://i.pinimg.com/originals/49/fe/c8/49fec86beb14058b401afddf41d12877.jpg",
    "https://www.todofondos.net/wp-content/uploads/1920x1200-Mujeres-Agua-Nubes-Paisajes-Arboles-Arte-de-Fantasia.jpg",
  

];
        
        let frases = frase[Math.floor(Math.random() * frase.length)];//con esto creamos la funcion de enviar frases aleatorias
        let imagenes = img[Math.floor(Math.random() * img.length)];//con esto creamos la funcion de enviar imagenes aleatorias

        const embed = new Discord.MessageEmbed()
        .setAuthor({name: "Frace motivadora!", iconURL: client.user.displayAvatarURL({dynamic: true})})//Este es el titulo superior del mensaje
        .setDescription(`\`\`\`${frases}\`\`\``)//Aca van las frases motivadoras que se enviaran
        .setImage(`${imagenes}`)//Aca van las imagenes motivadoras que se enviaran
        .setColor("e60ad4") //Esto es opcional tambien, si quieres le puedes poner un color pero siempre todo en mayuscula y que sea en ingles el color, o tambien puedes poner un Hexcolor
        ; //para que le salga la hora que lo ejecuto

        
        message.reply({ embeds: [embed] })//Respondemos al comando con el embed creado, puedes usar message.channel.send si no quieres responder al comando.

    }

}