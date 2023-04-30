
module.exports = {
    name: "prefix",
    alias: ["prefijo",],
    desc: "Sirve para ver el prefijo del bot del Servidor",
    uso: "!prefix",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message, args, prefix) {
        return message.reply(`El prefix de este servidor es **"**\`${prefix}\`**"** <:coffe:1085588495172632638>.`)
    }
}

