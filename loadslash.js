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

client.on("ready", async () => {
  const guild = client.guilds.cache.get(guildId)
  if (!guild)
    return console.error("Target guild not found")

  await guild.commands.set([...client.slashcommands.values(j)])
  console.log(`Successfully loaded in ${client.slashcommands.size}`)
  process.exit(0)
})

const token = process.env['TOKEN']
client.login(token)