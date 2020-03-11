const Discord = require("discord.js");
const client = new Discord.Client();
const {getModules} = require("./functions/modulesLoad.js");
client.commands = new Discord.Collection();

client.on("ready", () => {

    getModules(client.commands);
    console.log("Bot actif !");

    client.user.setActivity("p:help |a porno with the Manuel Ferrero's banana in Riley Reid's peach", {type: "WATCHING"});

});

client.on("message", async (message) => {

    if (message.author.bot) return;
    let prefix = "p:";
    let msgargs = message.content.split(" ");
    let cmdargs = msgargs[0];
    let args = msgargs.slice(1);

    if (!cmdargs.startsWith(prefix)) return;

    let cmds = client.commands.get(cmdargs.slice(prefix.length));

    if (cmds) await cmds.run(client, message, args);

});

client.login("NjU1MDg2NDQ0MDQ1NTMzMjE0.Xl_rkA.QJzhZRhrIhsIr7HxdikplEcK4SA");