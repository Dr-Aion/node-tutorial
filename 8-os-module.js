const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user)

//method returns systen's uptime in seconds
console.log(`The system uptime is ${os.uptime()} s`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)