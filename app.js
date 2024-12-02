const express = require("express")
const cors = require("cors")
const { v4: uuidv4 } = require('uuid');
const { users, accounts } = require('./config/config')
const { usersPath, accountsPath } = require('./config/constants')
// const corsOptions = require('./cors')
const fs = require('fs')
const bcrypt = require('bcryptjs')
const { join } = require('path')
var salt = bcrypt.genSaltSync(10);

const app = express()

app.use(express.json())
app.use(cors("*"))

// app.get('/api', async (req, res) => {

//     try {
//         res.send({ hello: 'Hello world' }).status(200)
//     } catch (error) {
//         res.status(500).send('Error get data')
//     }

// })

app.post('/api', async (req, res) => {
    console.log(req)
    const user_id = uuidv4()
    const currentTime = new Date().getTime()

    let hashpass = bcrypt.hashSync(req.body.password.toString(), salt);

    const user = {
        id: user_id,
        username: req.body.username,
        password: hashpass,
        timestamp: currentTime,
        nick_name: undefined
    }

    users.push(user)

    const newAccount = {
        id: uuidv4(),
        owners: [user_id],
        outcome: {},
        income: {},
        timestamp: currentTime
    }
    console.log({ users })
    accounts.push(newAccount)

    try {

        fs.writeFile(join(__dirname, usersPath), JSON.stringify(users), 'utf-8', (err) => {
            if (err) {
                console.log(
                    `Something went wrong whild inserting new user: ${err}`,
                )
            }

        })

        fs.writeFile(join(__dirname, accountsPath), JSON.stringify(accounts), 'utf-8', (err) => {
            if (err) {
                console.log(
                    `Something went wrong whild inserting new account: ${err}`,
                )
            }

        })

        const newUser = {
            ...user,
            account: newAccount
        }

        res.send(JSON.stringify(newUser)).status(201)
    } catch (error) {
        console.log({ error })
        res.status(500).send('Error get data')
    }

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})