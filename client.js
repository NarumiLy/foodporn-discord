const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();
client.description = new Discord.Collection();

fs.readdir("./modules/", (err, files) => {

    if (err) return console.log(err.stack);

    const jsfile = files.filter(f => f.split(".").pop() === "js");

    if (jsfile.length <= 0) return console.log("0 js file.");

    jsfile.forEach((f) => {

        let loadedcmd = require(`./modules/${f}`);

        client.commands.set(loadedcmd.help.name, loadedcmd);
        client.description.set(loadedcmd.help.name, loadedcmd.help.description)

    });
});

client.on("ready", () => {

    console.log("Bot actif !");
    client.user.setActivity("a porno with the Manuel Ferrero's banana in Riley Reid's peach", {type: "WATCHING"});

});

client.on("message", async (message) => {

    if (message.author.bot) return;

    let prefix = "Pd:";
    let msgargs = message.content.split(" ");
    let cmdargs = msgargs[0];
    let args = msgargs.slice(1);

    if (!cmdargs.startsWith(prefix)) return;

    let cmds = client.commands.get(cmdargs.slice(prefix.length));

    if (cmds) await cmds.run(client, message, args);

});

client.login("NjU1MDg2NDQ0MDQ1NTMzMjE0.Xl_rkA.QJzhZRhrIhsIr7HxdikplEcK4SA");