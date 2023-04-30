const { DiscordAPIError } = require('@discordjs/rest');
const { MessageActionRow, MessageselectMenu, MessageEmbed, MessageButton} = require('discord.js');
const Discord = require("discord.js")
module.exports = {
  name: 'ready',
	async run (client, message) {

///////////////////STATUS READY///////////////////////////
  let servers = await client.guilds.cache.size
  let servercount = await client.guilds.cache.reduce((a,b) => a+b.memberCount, 0 )
  const estados =[
    {
    tipo: "WATCHING",
    contenido: `${servercount} users ${servers} servers 💘`,
    opcionesestado: "on"
   },
   {
    tipo: "PLAYING",
    contenido: `/help | 💘`,
    opcionesestado: "on"
   },

  ];
  
  async function activarestado() {
    const estado = Math.floor(Math.random() * estados.length);
  
    try{
      await client.user.setPresence({
        activities:[
          {
          name:estados[estado].contenido,
          type:estados[estado].tipo
         },
        ],
        status: estados[estado].opcionesestado
      });
  
    }catch (error){
      console.error[error];
    }
  } setInterval(activarestado,4000)

///////////////////AUTO -NSFW/////////////////////////////

///////////////LOGS/////////////////////
  console.log(`╔═════════════════════════════════════════════════════╗
║                                                     ║
║           ¡Estatus cargado Correctamente!           ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`)
}}
