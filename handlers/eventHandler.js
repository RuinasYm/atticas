module.exports = async (client, fs, Discord) => {
	const folders = fs.readdirSync(`./eventos`);
    let eventos = 0
	for (const folder of folders) {
		const files = fs.readdirSync(`./eventos/${folder}`);
		for (const file of files) {
			const event = require(`../eventos/${folder}/${file}`);
            if (event.run){
			    client.on(event.name, (...args) => event.run(client, ...args));
                eventos++
            }
		}
	}
    console.log(`╔═════════════════════════════════════════════════════╗
║                                                     ║
║        ¡${eventos} eventos Iniciados Correctamente!          ║
║                                                     ║
╚═════════════════════════════════════════════════════╝`)
};
