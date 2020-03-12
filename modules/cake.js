const pornfoodApi = require("../functions/pornfoodApiCmd");

module.exports.run = async (client, message) => {

    let food = new pornfoodApi("cake");
    let embed = food.getFoodImg();

    await message.channel.send({embed});

};

module.exports.help = {

    name: "burger",
    description: "Send a photo of a fucking big tasty cake."

};