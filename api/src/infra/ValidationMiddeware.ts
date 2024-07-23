import { Request, Response, NextFunction } from 'express'
import { func, ObjectSchema } from 'joi'
import { BadRequestError, BusinessError } from './helpers/Errors'
import { HttpStatusCode } from './helpers/HttpStatusCode'
import { responseErrorFormatter } from './helpers/ErrorHandling'
import { decodeToBase64 } from './helpers/SecurityHelper'


//validar a requisicao
function validationPayLoad(schema: ObjectSchema, key: 'body' | 'params'){
    return (req: Request, res: Response, next: NextFunction) =>{
    const { error } = schema.validate(req[key])

    if(error){
        const message = new BadRequestError('Invalid Payload')
        return res.
        status(HttpStatusCode.BAD_REQUEST).
        json(responseErrorFormatter(message))
    }
        next()
     }
}
//validar o body da requisicao
export function validateBody(schema: ObjectSchema){
    return validationPayLoad(schema, 'body')
}

//validar os parametros da requisicao
export function validateParams(schema: ObjectSchema){
    return validationPayLoad(schema, 'params')
}

//validar o token de autenticacao foi enviado
export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
)
{
    if(!req.headers.authorization){
        const message = new BusinessError('Missing authotization header')
        return res.
        status(HttpStatusCode.UNAUTHORIZED).
        json(responseErrorFormatter(message))

    }

    const token = req.headers.authorization.split(' ')[1]
    const user: any = decodeToBase64(token)

    if(!user){
        const message = new BadRequestError('Invalid Token')

        return res.
        status(HttpStatusCode.UNAUTHORIZED).
        json(responseErrorFormatter(message))

    }


    next()
}

