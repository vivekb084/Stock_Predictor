import fs from 'fs'
import  https from 'https'
import { isEmpty } from 'lodash'

import app from './app'
import { EnvVar } from './config'

const PORT = EnvVar.PORT || 3000
const SSL_ENABLED = EnvVar.SSL_ENABLED

let server

if(isEmpty(SSL_ENABLED)){
    server = app.listen(PORT, () => {
        console.log(`Magic Happens on port ${PORT}`)
    })
}
else{
    const options = {
      key:  fs.readFileSync(EnvVar.SSLKEYFILE,{ encoding: 'utf8', flag: 'r' }),
      cert: fs.readFileSync(EnvVar.SSLCRTFILE,{ encoding: 'utf8', flag: 'r' })
    }
    server = https.createServer(options, app).listen(PORT, () => {
        console.log(`SSL Magic Happens on port ${PORT}`)
    })
}

server.timeout = 20000
