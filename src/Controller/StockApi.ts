import { Request, Response } from 'express'
import { RespondError, RespondSuccess } from '../utils'

export const GetHistory = async (req: Request, res: Response) => {
    try {
        return RespondSuccess(res, 200, { } , "Data fetched successfully")
    } catch (error) {
        console.log('Error in Fetching data', error)
        return RespondError(res, 500, "Internal Server Error", error.message)
    }
}