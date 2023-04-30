const fs = require("fs")
const Discord = require("discord.js")
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId } = require('../config/config.json')
const config = require('../config/config.json')
module.exports = async (client, fs, Discord) => {
const commands = []
 fs.readdirSync('./slashcmd/').forEach((dir => {
  const slashcommandsFile = fs.readdirSync(`./slashcmd/${dir}/`).filter((file => file.endsWith('.js')))
  for (const file of slashcommandsFile){
    const slash = require(`../slashcmd/${dir}/${file}`)
    commands.push(slash.data.toJSON())

}  }
))

const rest = new REST({ version: "9"}).setToken(config.token)

createSlash()

async function createSlash(){
    try{
        await rest.put(
            Routes.applicationCommands(clientId), {
                body: commands
            }
        )
console.log(`╔═════════════════════════════════════════════════════╗
║                                                     ║
║             ¡Slash agregados Exitozamente!          ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`)
    } catch(e) {
        console.error(e)
    }
}}