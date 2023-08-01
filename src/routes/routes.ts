import { Router } from 'express'
import { GetHistory } from '../Controller/StockApi'

export const router: Router = Router()

router.use('/api/gethistory', GetHistory)