import { Router } from 'express'
import { GetStockNews } from '../Controller/StockApi'

export const router: Router = Router()

router.get('/api/getstocknews', GetStockNews)