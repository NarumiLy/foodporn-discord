const request = require("request");
const {createEmbed} = require("../functions/EmbedImage");

module.exports.run = async (client, message) => {

    request({

        url: "http://maven.wtf/api/random",
        json: true
    }, function (err, response, body) {

        if (!response) {

            return message.channel.send(`Un problème est survenu pendant la connexion au site. Response: ${response}`);

        } else if (response.statusCode === 404) {

            return message.channel.send(`Un problème est survenu sur le site. Error: ${response.statusCode}`);

        }


        const embed = createEmbed("Food", `http://maven.wtf${body.link}`, `GREEN`);
        message.channel.send({embed});

    })

};

module.exports.help = {

    name: "random",
    description: "Idk"

};