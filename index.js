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

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return
  if (!interaction.inGuild()) return interaction.reply("This command can only be used in a server")

  const slashcmd = client.slashcommands.get(interaction.commandName)

  if (!slashcmd) return interaction.reply("This is an invalid slash command")

  if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
    return interaction.reply("You do not meet the required permissions for this command")

  slashcmd.run(client, interaction)
})

const token = process.env['TOKEN']
client.login(token)