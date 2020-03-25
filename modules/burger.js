const pornfoodApi = require("../functions/pornfoodApiCmd");

module.exports.run = async (client, message) => {

    let food = new pornfoodApi("burger");
    let embed = await food.getFoodImg();

    await message.channel.send({embed});

};

module.exports.help = {

    name: "burger",
    description: "Send a photo of a burger. Logic. Simple. Basic. For americans."

};
