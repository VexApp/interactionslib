"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../dist/index.js");
let server = new index_js_1.Server({
    port: 4000,
    publicKey: "APPLICATION PUBLIC KEY" // Your public key can be found here https://discord.com/developers/applications
});
server.on('interaction', (interaction) => {
    if (interaction.data.name == "ping") {
        interaction.reply("Pong! :ping_pong:"); // You can send a plain message or embeds
    }
    if (interaction.data.name == "hello") {
        let embed = new index_js_1.EmbedBuilder();
        embed.title("Hello!");
        embed.description(`Hello, ${interaction.member.user.username}!`);
        embed.colour(0xFFFFFF);
        interaction.reply({ embeds: [embed], flags: 1 << 6 }); // Embeds are passed as an array within object, and you can pass message flags, in this case this message will be ephremal. 
    }
});
