const app = require('express')()

app.get('/', ((req, res) => {
    res.status(200).json({ "message": "ok" })
}))
app.listen('5000')