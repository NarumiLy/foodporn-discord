const pornfoodApi = require("../functions/pornfoodApiCmd");

module.exports.run = async (client, message) => {

    let food = new pornfoodApi("cake");
    let embed = await food.getFoodImg();

    await message.channel.send({embed});

};

module.exports.help = {

    name: "cake",
    description: "Send a photo of a fucking big tasty cake."

};
