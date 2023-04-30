const Discord = require ('discord.js')//definimos discord

module.exports = {
    name: "aheago",//este es el nombre del comando
    alias: [],//si quieres agregar un alias agrega unas comillas ejemplo: [""], si no quieres, solo dejalo asi.
    desc: "Sirve para ver contenido nsfw",//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    uso: "!ahegao",//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    permisos: ["SEND_MESSAGES"],//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    permisos_bot: ["ADMINISTRATOR"],//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado
    valoracion: "⭐⭐⭐⭐⭐",//esto es opcional, son solo obciones que se agregan a un comando help perzonalizado

    async execute (client, message, args){

            if (!message.channel.nsfw) return message.reply({// Hacemos que el comando solo funcione en canales nsfw
      embeds: [new Discord.MessageEmbed()
          .setDescription("**<:fail:1083542064924479549> |  Este comando solo funciona en canales Nsfw! | <:fail:1083542064924479549>**")
          .setColor("e60ad4")
      ]
    })

        const contenidos = [//Esto es el contenido que enviara el bot, agrega el contenido a tu gusto
        "https://cdn.discordapp.com/attachments/996533081072750592/1010290971486982184/video0_2-1.mp4",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010290971814150154/tRjMr7W.mp4",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010290972174844095/unknown-5.png",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010290972514586644/me1adinha10_905162.jpg",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010290972837560441/20220803_134042.jpg",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010290973294723072/Screenshot_20220329-123500_Instagram.jpg",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010290973647052910/47c757c.png",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010290974494314546/you-want-to-cum-in-my-little-mouth-or-in-my-sweet-fgi1hulmz6.mp4",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010290975073120266/DASH_1080_1.mp4",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010290975488352256/-539631929675653963.mp4",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291127729000478/lovefans.club_-_Hannah_owo_1.mp4",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291128102301766/IVjgGUI3_480p.mp4",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291128509136906/24B.jpg",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291128819523704/00-35-00-1635981542_real-ahegao-fejs-3.jpg",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291129360592976/00-34-52-1635981541_real-ahegao-fejs-1.jpg",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291129700319322/unknown-111.png",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291130048454716/ahegao.mp4",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291130572754954/lv_0_20220725160500.mp4",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291130946044014/video-scrolller_com-16531225096373_1.mov",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291131268997220/unknown-3.png",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291204354740314/1CrPYDj.mp4",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291204753211493/FatherlyDeliriousLark-mobile.mov",
        "https://cdn.discordapp.com/attachments/996533081072750592/1010291205164236890/wMjdwtn.mp4",

    ] 

    let contenido = contenidos[Math.floor(Math.random() * contenidos.length)];//con esto creamos una funcion para enviar contenido aleatoriamente
    
    setTimeout(() => {//Hacemos que el mensaje se envie en un tiempo personalizado

    message.channel.send({ content: `\`\`\`🔞 Fetiches - Ahegao \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),//añadimos un boton de descarga
        ]
        )]})}, 1000);//enviamos el mensaje con un delay de 1 segundo, puedes modificar el tiempo en milisegundos
}

}