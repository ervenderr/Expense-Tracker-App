const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

// middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('HEllo World!')
})

const server = () => {
    app.listen(PORT, ( ) => {
        console.log(`Server running on port ${PORT}`)
    })
}

server()