module.exports = {
    token: 'XXXXXXXXXXXXXXXXXX', //Token du bot
    botId: 'XXXXXXXXXXXXXXXXXX', //Id du bot
    owner: 'XXXXXXXXXXXXXXXXXX', //Id du Propriétaire
    prefix: '!',//Prefix du bot
    embed: {
        color: 'AQUA', //Embed Color
        footer: 'Template by Derp#5777' //Embed Footer
    },
    plugin: {
        server: 'XXXXXXXXXXXXXXXXXX',//Id du serveur
        welcome: {
            enabled: true,// true = plugin activé || false = plugin desactivé
            channel: 'XXXXXXXXXXXXXXXXXX',//id du channel de bienvenue
            log: true// true = log activé || false = log desactivé
        },
        leave: {
            enabled: true,// true = plugin activé || false = plugin desactivé
            channel: 'XXXXXXXXXXXXXXXXXX',//Id du channel de leave
            log: true// true = log activé || false = log desactivé
        },
        autoRole:{
            enabled: true,// true = plugin activé || false = plugin desactivé
            role: 'XXXXXXXXXXXXXXXXXX',//Id du role
            log: true// true = log activé || false = log desactivé
        },
        log: {
            enabled: true,// true = plugin activé || false = plugin desactivé
            channel: 'XXXXXXXXXXXXXXXXXX'//Id du channel Logs
        }
    }
}