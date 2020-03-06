const {MessageEmbed} = require("discord.js");

class EmbedImage {

    static createEmbed(title, imgURL, color) {

        return new MessageEmbed()
            .setTitle(`${title} :drooling_face:`)
            .setColor(color)
            .setImage(imgURL);

    }
}

module.exports = EmbedImage;