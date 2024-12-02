const fs = require('fs')
const { usersPath, accountsPath } = require('./constants')

const usersListString = fs.readFileSync(usersPath, 'utf-8')
const usersFlieRead = JSON.parse(usersListString)

const accountsListString = fs.readFileSync(accountsPath, 'utf-8')
const accountsFileRead = JSON.parse(accountsListString)

module.exports = {
    users: usersFlieRead ? usersFlieRead : undefined,
    accounts: accountsFileRead ? accountsFileRead : undefined
}