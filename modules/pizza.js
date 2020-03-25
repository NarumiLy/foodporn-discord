const pornfoodApi = require("../functions/pornfoodApiCmd");

module.exports.run = async (client, message) => {

    let food = new pornfoodApi("pizza");
    let embed = await food.getFoodImg();

    await message.channel.send({embed});

};

module.exports.help = {

    name: "pizza",
    description: "This command is only for italians. Yes it's a stereotype."

};
