import express from 'express'
import renderer from "./helpers/renderer";


const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.status(200).send(renderer(req))
})

app.listen(3000, () => {
    console.log(`Listen on port 3000`)
    console.log(`Click Ctrl + C to quit`)
})