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
  
}

module.exports = {
  name: "timeout",
  description: "This is the command to timeout unruly members :)",
  perm: "MODERATE_MEMBERS",
  options: [
    {
      name: "user",
      description: "The user you want to timeout",
      type: "USER",
      required: true
    },
    {
      name: "duration",
      description: "How long you want to timeout said user",
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