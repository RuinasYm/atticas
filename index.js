const Discord = require('discord.js');
const config = require('./config/config.json')
const intents = new Discord.Intents(14023)
const client = new Discord.Client({ partials: ["CHANNEL"], intents });
const fs = require('fs');
const http = require ('http')

http.createServer((req, res) => res.end("Hola estoy enlazado by: https://discord.gg/9krfFgfUDD")).listen(process.env.PORT);

let files = fs.readdirSync('./handlers');
client.handlers = new Discord.Collection();
for (let file of files) {
	let handler = require(`./handlers/${file}`);
	client.handlers.set(handler(client, fs, Discord));
}

console.log(`╔═════════════════════════════════════════════════════╗
║                                                     ║
║       ¡Se cargaron ${client.handlers.size} Handlers Correctamente!        ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`);

client.login(config.token).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO -[X]-`))
console.log(`╔═════════════════════════════════════════════════════╗
║                                                     ║
║             ¡Funcionando Correctamente!             ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`)
//test
