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

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.slashcommands = new Discord.Collection()

client.loadslashcommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadslashcommands(bot, false)

const token = process.env['TOKEN']
client.login(token)