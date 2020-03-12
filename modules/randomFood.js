const axios = require("axios");
const {MessageEmbed} = require("discord.js");

module.exports.run = async (client, message) => {

    await axios.get("https://maven.wtf/api/random/").then((res) => {

        let embed = new MessageEmbed()
            .setTitle(`Food 🤤`)
            .setColor("GREEN")
            .setImage(`https://maven.wtf${res.data.link}`);


        message.channel.send({embed});
    }).catch((e) => {

        let embed = new MessageEmbed()
            .setTitle(`Error 🤤`)
            .setColor("RED")
            .setImage(`An error occured. Response: ${e}`);

        message.channel.send({embed});
    });
};

module.exports.help = {

    name: "random",
    description: "Idk"

};