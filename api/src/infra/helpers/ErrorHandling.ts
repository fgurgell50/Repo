import { Request, Response, NextFunction } from "express";
import { 
    NotFoundError, 
    BusinessError, 
    UnautorizedError, 
    UnprocessebleEntityError 
} from "./Errors";
import { error } from "console";
import { HttpStatusCode } from "./HttpStatusCode";

export const errorHandling = (
    error: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction) =>{
        let statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR

        if(error instanceof NotFoundError) statusCode = HttpStatusCode.NOT_FOUND
        if(error instanceof UnautorizedError) statusCode = HttpStatusCode.UNAUTHORIZED
        if(error instanceof BusinessError) statusCode = HttpStatusCode.UNPROCESSABLE_ENTITY

        return res.status(statusCode).json(responseErrorFormatter(error))
}

export function responseErrorFormatter(error: Error) {
    return {
        name: error.name,
        message: error.message,
    }
}