const fs = require("fs")

const getFile = (path, ending) => {
  return fs.readdirSync(path).filter(f => f.endsWith(ending))
}