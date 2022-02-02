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
This example is written in TypeScript and is easily changeable to JavaScript. View our examples [here](https://github.com/VexApp/interactionslib/tree/main/examples).
```ts
import { Server, Interaction } from "../index";

let server = new Server({
    publicKey: "PUBLIC KEY" // Can be found at discord.com/developers/applications
})

server.on("interaction", (interaction: Interaction) => {
    if (interaction.isSlashCommand()) {
        interaction.data.reply("test");
    }

    if (interaction.isButton()) {
        interaction.data.reply({ content: `Hello, ${interaction.data.member.user.username}.`, flags: 1<<6 })
    }
})

server.start();
```
If you run the script, only the local network will be able to access the HTTP Interactions, you will need to tunnel the server. This can be done numerous ways, below is with [ngrok](https://ngrok.com/).
```shell
ngrok http 4000 # change the port respective of what you chose
```


### Docs
Will make it later.


## Todo
[x] Support buttons
[ ] Support autocomplete
[ ] Make docs
[ ] Error system
[ ] Register slash commands system
[ ] Ability to connect to a DJS bot and/or custom client
