const { MessageEmbed } = require('discord.js')
module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async run(member) {
        if (member.guild.id === this.client.config.plugin.server) {
            let log = this.client.config.plugin.log
            let logChannel = member.guild.channels.cache.get(log.channel)
            //Welcome Part
            let leave = this.client.config.plugin.leave
            if (leave.enabled) {
                let channel = member.guild.channels.cache.get(leave.channel)
                if (!channel) {
                    if (log.enabled && logChannel) {
                        logChannel.send(`:x: | Je n'arrive pas a trouver le salon d'au revoir`)
                        console.log(`:x: | Je n'arrive pas a trouver le salon d'au revoir`)
                    } else if (!log.enabled) {
                        console.log(`:x: | Je n'arrive pas a trouver le salon d'au revoir`)
                        try {
                            await member.guild.owner.send(`:x: | Je n'arrive pas a trouver le salon d'au revoir`)
                        } catch (e) {
                        }
                    }
                } else if (channel) {
                    let welcomeEmbed = new MessageEmbed()
                        .setTimestamp()
                        .setColor(this.client.config.embed.color)
                        .setFooter(this.client.config.embed.footer)
                        .setAuthor('Abandon')
                        .setDescription(`Nous disons au revoir à ${member.user.tag}`)
                    channel.send(welcomeEmbed)
                    if (log.enabled && logChannel) {
                        logChannel.send(`Nouvel abandon ${member.toString()}`)
                    }
                }
            }
        }
    }
};

