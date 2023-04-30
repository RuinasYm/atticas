module.exports = async (client, fs, Discord) => {
client.slashcommands = new Discord.Collection();
 fs.readdirSync('./slashcmd/').forEach((dir => {
  const slashcommandsFile = fs.readdirSync(`./slashcmd/${dir}/`).filter((file => file.endsWith('.js')))
  for (const file of slashcommandsFile){
    const slash = require(`../slashcmd/${dir}/${file}`)
client.slashcommands.set(slash.data.name, slash)
  }
}))
console.log(`╔═════════════════════════════════════════════════════╗
║                                                     ║
║             ¡Comandos Slash Iniciados!              ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`)
}
