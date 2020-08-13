const Command = require("../../Base/Command.js");
module.exports = class Bvn extends Command {
    constructor (client) {
        super(client, {
            name: "bvn",
            description: "Dites Bienvenue",
            permission: [],
            owner: false,
        });
    }
    async run (message, args) {
        message.channel.send('Bienvenue !!')
    }
}


