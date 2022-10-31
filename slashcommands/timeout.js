const durations = [
  {name: "60 seconds", value: 60 * 1000 },
  {name: "5 minutes", value: 5 * 60 * 1000 },
  {name: "10 minutes", value: 10 * 60 * 1000 },
  {name: "30 minutes", value: 30 * 60 * 1000 },
  {name: "1 hour", value: 60 * 60 * 1000 },
  {name: "1 day", value: 24 * 60 * 60 * 1000 },
  {name: "1 week", value: 7 * 24 * 60 * 60 * 1000 }
]

const run = async (client, interaction) => {
  let member = interaction.options.getMember("user")
  let duration = interaction.options.getNumber("duration")
  let reason = interaction.options.getString("reason") || "No reason given"

  if (!member) return interaction.reply("Specified member is invalid")

  try {
    await member.timeout(duration, reason)
    return interaction.reply(`${member.user.tag} was timed out for ${durations.find(d=> duration === d.value)?.name} for a reason of ${reason}`)
  }
  catch(err){
    if (err){
      console.error(err)
      return interaction.reply(`Failed to timeout ${member.user.tag}`)
    }
  }
}

module.exports = {
  name: "timeout",
  description: "This is the command to timeout unruly members :)",
  perm: "MODERATE_MEMBERS",
  options: [
    {
      name: "user",
      description: "This is the user that you want to timeout",
      type: "USER",
      required: true
    },
    {
      name: "duration",
      description: "This is how long you want to timeout said user",
      type: "NUMBER",
      choices: durations,
      required: true
    },
    {
      name: "reason",
      description: "Reason for timeout",
      type: "STRING",
      required: false
    }
  ]
}