const rootPath = '/kinesis'

async function sendMessage(req, res) {
    try {
        const { message } = req.body
        res.statusCode = 200
        res.json({
            success: true,
        });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error })
    }
}

module.exports = async function (app, db) {
    app.post(`${rootPath}/send-message`, (req, res) => {
        return sendMessage(req, res)
    })
}

