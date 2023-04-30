module.exports = (client, fs, Discord) => {
client.commands = new Discord.Collection();
 fs.readdirSync('./commands/').forEach((dir => {
  const commands = fs.readdirSync(`./commands/${dir}/`).filter((file => file.endsWith('.js')))
  for (const file of commands){
    const command = require(`../commands/${dir}/${file}`)
    client.commands.set(command.name, command)

  }
}))
console.log(`╔═════════════════════════════════════════════════════╗
║                                                     ║
║             ¡Comandos Prefix Iniciados!             ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`)}