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
            let welcome = this.client.config.plugin.welcome
            if (welcome.enabled) {
                let channel = member.guild.channels.cache.get(welcome.channel)
                if (!channel) {
                    if (log.enabled && logChannel) {
                        logChannel.send(`:x: | Je n'arrive pas a trouver le salon de bienvenue`)
                        console.log(`:x: | Je n'arrive pas a trouver le salon de bienvenue`)
                    } else if (!log.enabled) {
                        console.log(`:x: | Je n'arrive pas a trouver le salon de bienvenue`)
                        try {
                            await member.guild.owner.send(`:x: | Je n'arrive pas a trouver le salon de bienvenue`)
                        } catch (e) {}
                    }
                } else if (channel) {
                    let welcomeEmbed = new MessageEmbed()
                        .setTimestamp()
                        .setColor(this.client.config.embed.color)
                        .setFooter(this.client.config.embed.footer)
                        .setAuthor('Nouveau Membre')
                        .setDescription(`Nous acceuillons ${member.user.tag} sur ${member.guild.name}`)
                    channel.send(welcomeEmbed)
                    if (log.enabled && logChannel) {
                        logChannel.send(`Nouveau Membre: ${member.toString()}`)
                    }
                }
            }
            //Autorole Part
            let autorole = this.client.config.plugin.autoRole
            if (autorole.enabled) {
                let role = member.guild.roles.cache.get(autorole.role)
                if (!role) {
                    if (log.enabled && logChannel) {
                        logChannel.send(`:x: | Je n'arrive pas a trouver le role avec l'id ${autorole.role}`)
                        console.log(`:x: | Je n'arrive pas a trouver le role avec l'id ${autorole.role}`)
                    } else if (!log.enabled) {
                        console.log(`:x: | Je n'arrive pas a trouver le role avec l'id ${autorole.role}`)
                        try {
                            await member.guild.owner.send(`:x: | Je n'arrive pas a trouver le role avec l'id ${autorole.role}`)
                        } catch (e) {}
                    }
                } else if (role) {
                    try {
                        member.roles.add(role.id)
                    } catch (e) {
                        if (log.enabled && logChannel) {
                            logChannel.send(`Role \`${role.name}\` ajouté a ${member.toString()} via l'autorole`)
                        }
                    }
                    if (log.enabled && logChannel) {
                        logChannel.send(`Je n'arrive pas a donner le role \`${role.name}\` à ${member.toString()} via l'autorole`)
                        console.log(`Je n'arrive pas a donner le role \`${role.name}\` à ${member.toString()} via l'autorole`)
                    }
                }
            }
        }
    }
};

