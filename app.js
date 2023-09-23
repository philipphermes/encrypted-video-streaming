const app = require('express')()
const fs = require('fs')
const { getManifestStream, getSegmentStream } = require('hls-server/src/fsProvider')
const hls = require('hls-server')

console.log('running')

app.get('/', (req, res) => {
    console.log(`${__dirname}/client.html`)
    return res.status(200).sendFile(`${__dirname}/client.html`)
})

const server = app.listen(3000)

new hls(server, {
    provider: {
        exists: (req, cb) => {
            const ext = req.url.split('.').pop()

            if (ext !== 'm3u8' && ext !== 'ts') {
                return cb(null, true)
            }

            fs.access(__dirname + req.url, fs.constants.F_OK, (err) => {
                if (err) {
                    console.log("File not exists")
                    return cb(null, false)
                }

                cb(null, true)
            })            
        },
        getManifestStream: (req, cb) => {
            const stream = fs.createReadStream(__dirname + req.url)
            cb(null, stream)
        },
        getSegmentStream: (req, cb) => {
            const stream = fs.createReadStream(__dirname + req.url)
            cb(null, stream)
        }
    }
})