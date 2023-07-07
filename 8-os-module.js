const os = require('os')

//infor about current user
const user = os.userInfo()
console.log(user)

//method returns system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)