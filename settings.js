const fs = require('fs')
const chalk = require('chalk')

global.devNumber = ['6281396999121']
global.name = 'Alwaysdimz'
global.namebot = 'AlwaysBotz'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})