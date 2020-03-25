const {MessageEmbed} = require("discord.js")

module.exports.run = async (client, message) => {

    let embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("Information")
    .addField("Creator", "<@323100698160005120>", true)
    .addField("RAM usage:", process.memoryUsage().heapUsed + " MB", true)
    .setTimestamp(new Date.now())
    .setFooter("Pornfood is the best bot for useful commands", client.user.displayAvatarURL());
    
    await message.channel.send({embed});

};

module.exports.help = {

    name: "info",
    description: "A simple cmd for to have the creator id :)"

};