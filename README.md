[![Npm package version](https://badgen.net/npm/v/@vexxlol/interactions)](https://npmjs.com/package/@vexxlol/interactions) [![Npm package yearly downloads](https://badgen.net/npm/dy/@vexxlol/interactions)](https://npmjs.com/package/@vexxlol/interactions) <a align="center" href="https://discord.gg/q4QYE9F"><img src="https://discordapp.com/api/guilds/669092504121114644/widget.png?style=shield" alt="Discord" /></a>
# @vexxlol/interactions
Public library for using discord HTTP interactions. Written in 100% TypeScript.

# Quickstart
### Installation 
To install the package, please run the following command in an terminal.
```shell
npm i @vexxlol/interactions
```

### Example
This example is written in TypeScript and is easily changeable to JavaScript. View our examples [here](https://VexApp/interactionslib/tree/main/examples).
```ts
import { Server, Interaction, EmbedBuilder } from "@vexxlol/interactions"

let server = new Server({
    port: 4000, // This is optional and will default to port 4000.
    publicKey: "APPLICATION PUBLIC KEY" // Your public key can be found here https://discord.com/developers/applications
});

server.on('interaction', (interaction: Interaction) => {
    if (interaction.data.name == "ping") {
        interaction.reply("Pong! :ping_pong:"); // You can send a plain message or embeds
    }

    if (interaction.data.name == "hello") {
        let embed = new EmbedBuilder();
        embed.title("Hello!")
        embed.description(`Hello, ${interaction.member.user.username}!`);
        embed.colour(0xFFFFFF);


        interaction.reply({ embeds: [embed.build], flags: 1<<6 }) // Embeds are passed as an array within object, and you can pass message flags, in this case this message will be ephremal. 
    }
})

// There also is two other events which are not officially support but work.
// sever.on('autocomplete' (data, res)) & server.on('message_component', (data, res))
// data returns the json sent from discord, and res is an response class created by express if you want to implement these interactions.

server.start();
```


### Docs
Will make it later.

