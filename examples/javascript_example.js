const { Server, Interaction } = require("@vexxlol/interactions");

let server = new Server({
    publicKey: ""
})

server.on("interaction", (interaction) => {
    if (interaction.isSlashCommand()) {
        interaction.data.reply("test");
    }

    if (interaction.isButton()) {
        interaction.data.reply({ content: `How about you fuck off, ${interaction.data.member.user.username}.`, flags: 1<<6 })
    }
})


server.start();
