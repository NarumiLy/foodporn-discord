const {getModulesHelp} = require("../functions/modulesLoad.js");
const Discord = require("discord.js");
cmdHelp = new Discord.Collection();

module.exports.run = async (client, message) => {

    let helpString = "";
    getModulesHelp(cmdHelp);

    for (let [name, desc] of cmdHelp) {

        helpString = helpString + "\n" + name + ": " + desc;

    }

    await message.channel.send(helpString, {code: true}).catch((e) => {

        message.channel.send(`Error: ${e}. (ps: retry the cmd, if it doesn't work warn <@323100698160005120>)`);

    });
};

module.exports.help = {

    name: "help",
    description: "A simple help cmd"

};