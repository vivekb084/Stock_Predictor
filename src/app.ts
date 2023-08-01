import * as bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { EnvVar } from './config/constants/envVariable'
import { router } from './routes'

class App {

  public app: express.Application

  constructor() {
    this.app = express()
    this.app.use(helmet())
    this.config()
    this.mountRoutes()

  }

  private config(): void {
    // enabling cors
    this.app.use(cors())
    // support application/json type post data
    this.app.use(bodyParser.json())
  }

  private mountRoutes(): void {
    this.app.use(router)
  }
}

export default new App().app