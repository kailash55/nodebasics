//Modules
const names = require('./4-names')
const sayHi = require('./5-utils')
const {items, singlePerson} = require('./6-alternative-flavours')

sayHi("susan")
sayHi(names.john)
sayHi(names.peter)

sayHi(singlePerson.name)
console.log(items)

require('./7-mind-grenade')