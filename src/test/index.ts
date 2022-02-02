import { Server, Interaction } from "../Index";

let server = new Server({
    publicKey: "bc3c94adcadd42ab157c6de3728628362395402265f0047e84745ec7ae2f064b"
})

server.on("interaction", (interaction: Interaction) => {
    if (interaction.isSlashCommand()) {
        interaction.data.reply("test");
    }

    if (interaction.isButton()) {
        interaction.data.reply({ content: `How about you fuck off, ${interaction.data.member.user.username}.`, flags: 1<<6 })
    }
})


server.start();
