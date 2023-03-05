const https = require('https');
async function post(config, data) {
    const dataString = JSON.stringify(data)

    const options = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + config.APIKey,
            'Content-Type': 'application/json',
            'Content-Length': dataString.length,
        },
        timeout: config.timeout, // in ms
    }

    return new Promise((resolve, reject) => {
        const req = https.request(config.openaiUrl, options, (res) => {
            console.log("response is here....");
            if (res.statusCode < 200 || res.statusCode > 299) {
                return reject(new Error(`HTTP status code ${res.statusCode}`))
            }

            const body = []
            res.on('data', (chunk) => body.push(chunk))
            res.on('end', () => {
                const resString = Buffer.concat(body).toString()
                resolve(JSON.parse(resString))
            })
        })

        req.on('error', (err) => {
            reject(err)
        })

        req.on('timeout', () => {
            req.destroy()
            reject(new Error('Request time out'))
        })

        req.write(dataString)
        console.log("finished send request....");
        req.end()
    })
}

module.exports.post = post;