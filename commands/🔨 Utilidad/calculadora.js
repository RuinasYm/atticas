const { MessageActionRow, MessageButton } = require('discord.js');
const math = require('mathjs');

module.exports = {
        name: "calculadora",
        alias: ["calcular", "calculator"],
        desc: "Usa una calculadora",
        uso: "!calculadora",
        permisos: ["SEND_MESSAGES"],
        permisos_bot: ["SEND_MESSAGES"], 
        valoracion: "⭐⭐⭐⭐⭐",
    async execute (client, message,) {
        const rows = [
            new MessageActionRow().addComponents([
                new MessageButton({
                    customId: 'clear',
                    style: 'DANGER',
                    label: "AC",
                }),
                new MessageButton({
                    customId: '(',
                    style: 'PRIMARY',
                    label: "(",
                }),
                new MessageButton({
                    customId: ')',
                    style: 'PRIMARY',
                    label: ")",
                }),
                new MessageButton({
                    customId: '/',
                    style: 'PRIMARY',
                    label: "÷",
                }),
            ]),
            new MessageActionRow().addComponents([
                new MessageButton({
                    customId: '7',
                    style: 'SECONDARY',
                    label: "7",
                }),
                new MessageButton({
                    customId: '8',
                    style: 'SECONDARY',
                    label: "8",
                }),
                new MessageButton({
                    customId: '9',
                    style: 'SECONDARY',
                    label: "9",
                }),
                new MessageButton({
                    customId: '*',
                    style: 'PRIMARY',
                    label: "x",
                })
            ]),
            new MessageActionRow().addComponents([
                new MessageButton({
                    customId: '4',
                    style: 'SECONDARY',
                    label: "4",
                }),
                new MessageButton({
                    customId: '5',
                    style: 'SECONDARY',
                    label: "5",
                }),
                new MessageButton({
                    customId: '6',
                    style: 'SECONDARY',
                    label: "6",
                }),
                new MessageButton({
                    customId: '-',
                    style: 'PRIMARY',
                    label: "-",
                })
            ]),
            new MessageActionRow().addComponents([
                new MessageButton({
                    customId: '1',
                    style: 'SECONDARY',
                    label: "1",
                }),
                new MessageButton({
                    customId: '2',
                    style: 'SECONDARY',
                    label: "2",
                }),
                new MessageButton({
                    customId: '3',
                    style: 'SECONDARY',
                    label: "3",
                }),
                new MessageButton({
                    customId: '+',
                    style: 'PRIMARY',
                    label: "+",
                })
            ]),
            new MessageActionRow().addComponents([
                new MessageButton({
                    customId: 'backspace',
                    style: 'PRIMARY',
                    label: "❌",
                }),
                new MessageButton({
                    customId: '0',
                    style: 'SECONDARY',
                    label: "0",
                }),
                new MessageButton({
                    customId: '.',
                    style: 'PRIMARY',
                    label: ".",
                }),
                new MessageButton({
                    customId: 'result',
                    style: 'SUCCESS',
                    label: "=",
                })
            ]),
        ];

        const msg = await message.reply({
            components: rows,
            embeds: [{
                title: '🧮 Calculadora',
                description: "```\n \n```",
                color: "e60ad4"
            }],
            fetchReply: true,
        });

        let data = "";

        const col = msg.createMessageComponentCollector({
            filter: i => i.user.id === message.author.id,
            time: 600000
        });

        col.on('collect', async (i) => {
            let extra = "";

            if (i.customId === "result") {
                try {
                    data = math.evaluate(data).toString();
                } catch (e) {
                    data = "";
                    extra = "Ah ocurrido un error, usa AC para reiniciar";
                }
            } else if (i.customId === "clear") {
                data = "";
                extra = " "
            } else if (i.customId === "backspace") {
                data = data.slice(0, data.length - 1);
                extra = " "
            } else {
                const lc = data[data.length - 1];

                data += `${(
                    (parseInt(i.customId) == i.customId || i.customId === ".")
                    &&
                    (lc == parseInt(lc) || lc === ".")
                ) || data.length === 0 ? "" : " "}` + i.customId;
            }

            i.update({
                embeds: [{
                    title: '🧮 Calculadora',
                    color: "e60ad4",
                    description: `\`\`\`\n${data || extra}\n\`\`\``,
                }]
            })
        })

        col.on('end', () => {
            msg.edit({
                components: [new MessageActionRow().addComponents([
                    new MessageButton({
                        label: "Calculadora Expirada",
                        disabled: true,
                        style: "DANGER",
                        customId: "_1_"
                    })
                ])]
            })
        })
    }
}