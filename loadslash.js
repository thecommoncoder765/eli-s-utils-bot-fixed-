const Discord = require("discord.js")

const client = new Discord.Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "MessageContent",
    // GuildMembers
  ]
})

let bot = {
  client
}

const guildId = "1034240157815156776"

client.slashcommands = new Discord.Collection()

client.loadslashcommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadslashcommands(bot, false)


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})


const token = process.env['TOKEN']
client.login(token)