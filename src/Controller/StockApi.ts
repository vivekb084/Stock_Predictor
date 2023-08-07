import { Request, Response } from 'express'
import { RespondError, RespondSuccess } from '../utils'
import { getQuotes } from '../utils/axios'

export const GetStockNews = async (req: Request, res: Response) => {
    try {
        const  StockNews = await getQuotes('GET','https://mboum-finance.p.rapidapi.com/ne/news')
        console.log(StockNews)
        return RespondSuccess(res, 200, StockNews , "Data fetched successfully")
    } catch (error) {
        console.log('Error in Fetching data', error)
        return RespondError(res, 500, "Internal Server Error", error.message)
    }
}

