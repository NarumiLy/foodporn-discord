const axios = require("axios");
const {MessageEmbed} = require("discord.js");

class pornfoodApiCmd {

    constructor(food) {

        this.food = food;

    }


    async getFoodImg() {
        try {

            let res = await axios.get(`https://maven.wtf/api/random/${this.food}`);
            let embed = new MessageEmbed()
                .setTitle(`${this.food} 🤤`)
                .setColor("GREEN")
                .setImage(`https://maven.wtf${res.data.link}`);

            return embed;
        } catch (ex) {

            let embed = new MessageEmbed()
                .setTitle("Error")
                .setColor("RED")
                .addField(`Error in the response of the server. Response: ${ex}`, true, true);

            return embed;
        }
    }
}

module.exports = pornfoodApiCmd;