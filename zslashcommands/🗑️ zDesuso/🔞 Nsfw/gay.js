const Discord = require ('discord.js')

module.exports = {
    name: "gay",
    alias: [],
    desc: "Sirve para ver contenido nsfw",
    uso: "!gay",
    permisos: ["SEND_MESSAGES"],
    permisos_bot: ["ADMINISTRATOR"], 
    valoracion: "⭐⭐⭐⭐⭐",

    async execute (client, message, args){

        if (!message.channel.nsfw) return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("**<:fail:1083542064924479549> |  Este comando solo funciona en canales Nsfw! | <:fail:1083542064924479549>**")
                .setColor("e60ad4")
            ]
          })

        const contenidos = ["https://cdn.discordapp.com/attachments/996801208352264244/1001931092447727626/VID_20220412_192541_076.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931092992999595/video0-2-1.mov",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931093450166383/trim.EBDA4827-B887-4FC6-8A93-99DF37FAB22E.mov",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931093945106432/VID_20220415_000707_873.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931094440038531/VID_20220415_001310_676.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931095064981545/VID-20210604-WA0017.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931095530553424/MzWsSO84TpLxd8RF.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931095920619580/91TL3E9AYCDgqXZd.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931144679395328/CALL_ME_WHEN_YOU_NEED__https___t.co_mtTZZS8ye7.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931145044307998/VID_20220415_000610_331.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931145434366084/VID_20220412_185903_874.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931145925103706/1_5179328399713239323.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931146340356137/video0-1-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931146709434448/VID_20220410_115955_861.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1001931147070160906/video_55.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1006235099832012871/GETTING_DEEP_INTO_THIS_HOLE_https___t.co_U6PyVU9MM0.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1006235100549222552/91TL3E9AYCDgqXZd.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1006235101144829952/MzWsSO84TpLxd8RF.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1006235101631352932/sa9d6c-rjSGAeMex.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1006235102109519872/atCy8-zkBeFhvqq0.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1006235102679941230/HideousDiscreteBrownbutterfly.mov",
        "https://cdn.discordapp.com/attachments/996801208352264244/1015355057513959495/VID-20220706-WA0002.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1015355058684174346/TdGp4Nbx-R2Ma6ux.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1015355059271389184/xvideos.com_ea385380a5296c491d1e3824f61e813f.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1015355059741138985/RQ9qrwzRP2_fgldROtTpdq.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1015355060370276372/0fFfMO58_V38mpqP.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1015355060978470932/twitter_20220723_104900.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1015355061473394879/twitter_20220426_070226.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1019310219425222656/Nfnkzu8hBa9NtfTh.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1019310220847104141/qnI6aWVf8Cnv_dUV.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1019310221425922118/i5XJu-t83Sbsve4m.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1019310221996331088/video0hfhfthrtyty4564.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1019310222688395425/GrizzledPotableSawfish-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801208352264244/1019310223330115584/DisgustingGoldPitbull-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478337965863033/Vp5hZtA4scNmDHP5.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478338464976916/eQczQRDorcPBxaOf.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478338892791838/R1_01_1.webm",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478339299659926/ReliableStandardBabirusa-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478339710697594/IkGOy22uwT-oyW_x-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478340125925396/video2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478340629237862/Tanner.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478341166104696/FirebrickNoteworthyArcherfish-mobile.mov",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478341661053030/received_798768171321105.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478377622999050/SPOILER_SPOILER_1SERE-CCUf4jiZbq.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478378013065336/xvideos.com_76f0de2f6d5303ce9d6470a11643e696-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478378398949426/Yr4t55.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478378747080814/video0.mov",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478379153932338/chae_1545067885390733312.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478379556589698/y5rJht6C5FGDwT-4.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478379967614976/FairDarkslategrayWhimbrel-mobile-2.mov",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478380311543808/IMG_3658.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478380714217552/Titus.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478381091696720/1056104550088197803.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478400721035364/R1_01.webm",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478401165643796/ssstwitter_1658480097.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1033478401610219550/BnjeUyfSRclwV7YQ.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758284381737010/trim.2734246A-D327-4C0A-904B-7C83C075C539.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758284805345302/received_576893907129814.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758285203812402/VID-20220826-WA0003.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758285589696614/onika-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758286013304862/onika-4.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758286487269457/video0-4_1.mov",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758286881542164/tweeload_06d87947.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758287376453632/2r3Ypk6lWF7UsuQI.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758287846223973/me.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758288286633984/video0-4.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758306699628554/ok9iYgBCxvvfSlJX.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758307072917595/EC51AE1E-2BF3-4B5F-9E72-F0A457DE7956.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758307517517854/ssstwitter.com_1663825528972.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1036758307970490379/SardonicSolidBoaconstrictor-mobile.mp4.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712409023913994/xvideos.com_0aa985c51075e7add06787d2a07e2e0a.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712409531433082/VID_20221123_042441_098.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712410047316119/VID_20220730_191634_161.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712410449977344/VID_20221121_233528_336.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712411100086334/VID_20221121_235433_028.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712411733434369/VID_20221112_103016_854.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712412131901440/VID_20221112_103010_319.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712412526149682/xvideos.com_670266538034b32b35a31782507b9eda-3.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712412966567976/xvideos.com_b67d8f61229dc162709f3f4d95d756bd-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712413436313610/xvideos.com_7c6b33d528ed04c538667e56f6056f4f.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712416359755807/xvideos.com_a2a30664cbd57b1a2f72db7ca70727af-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712416875659314/xvideos.com_77a754b90fa26d2ca0f260b37eb0e615-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712417366388746/xvideos.com_72b69eebb53065482ff1b0ee71a555dc-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712417785810994/xvideos.com_9c3d133ac60dbeaab803a021b4acd6fc-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712418251386980/xvideos.com_7cdc46b681355508f5185f97c31cf83c-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712418670821438/xvideos.com_861d42f815d96443b7c83afc0edbe1c4-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712419484516352/xvideos.com_2325ff4dbbc936ac9c6e02ba9a7fbf56.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712419987820544/xvideos.com_96545f994aa02e6e352aa7e6431b8b96-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712420419842088/xvideos.com_a920d8eaaca56a3d47e9491331ab7283-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712436442075156/xvideos.com_cbb16b955ca9d15bc6395262b046b2c4-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712436442075156/xvideos.com_cbb16b955ca9d15bc6395262b046b2c4-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712436878291024/xvideos.com_d2bacaa86449b386535f2195bf2fae78-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712437293519008/twitter_20221004_235452.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712437725528144/xvideos.com_eb3804de46f5cc129d5517885ac5d7a5-3.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712438086250576/xvideos.com_df9a94b6d2d3ed153f2ad1f6cefacbdc-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712438463729744/xvideos.com_bf413013542b18753b2e794bfbde70f6-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712438837030962/xvideos.com_bf0c9a4892bb986814d423298369c01c-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712439378088006/xvideos.com_add2e1d3ee235957efb1861da7b493fc.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712439768154192/xvideos.com_abf425798cb6bea5a62c2864b532b0af-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712440103710782/xvideos.com_ff43a9ee8922d5b587591fefb07cba6f-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712462639710288/xvideos.com_34719f5b04e4a7b79c52dd106002b484-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712462992023682/xvideos.com_ea4e22ca1515a8a83bce2034034ba997-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712463411445860/xvideos.com_e51b833f0253acae620a2b98863e451c-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712463755395082/xvideos.com_fc1900bac82a8dc347074b90d830bca9.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712464384532500/xvideos.com_f467f47c331aad7855b1e1f3414d75f8.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712464766205972/xvideos.com_ee7b522522496b0bab44d21915fbbd11.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712465164681276/xvideos.com_dfc7ac739d7b0de4587843cd9d3d9474.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712465542160424/xvideos.com_79425375620cd543552b8d44ecd9954e.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712465932222615/xvideos.com_a55b4cc76285b95afab63153cdd02c68-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712466288754688/xvideos.com_6140175b44efd022439d487f0cc68929-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712478942974052/xvideos.com_1ebc8c00b155bf7d7ce8a30f19f88f4b-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712479345623131/xvideos.com_819ea3367a7f78c11111c31803886ce4-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712479727292436/xvideos.com_354eb3ced8fe5940f0f7e9891e107beb-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712480113184768/xvideos.com_125bb6416db03fdb08620f97c2951a8d-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712480553582743/xvideos.com_6f2430a6ea57b9b191b56cbddb90873c-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712481040109598/xvideos.com_8a2026a35b6cf48645a252243e92da15-1.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712481652494356/xvideos.com_9a966e232dd19e8a29d399b995366433-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712482009006181/xvideos.com_5ddab829c3a83d4b48dd5c1e9e9bcb49-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712482499743845/xvideos.com_2ee7143d095d481b9d33642d3d009325-2.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712494663204954/1044428.mp4",
        "https://cdn.discordapp.com/attachments/996801208352264244/1052712495112011836/xvideos.com_93d3c19fd8ec358712bf73a89189edea-3.mp4"
        ]

        let contenido = contenidos[Math.floor(Math.random() * contenidos.length)]; setTimeout(() => {

    message.channel.send({ content: `\`\`\`🔞 Lgbt - Gays \`\`\` ${contenido}`, components: [new Discord.MessageActionRow().addComponents(
        [
            new Discord.MessageButton().setStyle(`LINK`).setLabel(`Descargar`).setURL(contenido),
        ]
        )]})}, 1000);
}

}
