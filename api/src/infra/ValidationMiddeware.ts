import { Request, Response, NextFunction } from 'express'
import { ObjectSchema } from 'joi'


//validar a requisicao
function validationPayLoad(schema: ObjectSchema, key: 'body' | 'params'){
    return (req: Request, res: Response, next: NextFunction) =>{
    const { error } = schema.validate(req[key])

    if(error){
        const message = 'Invalid Payload'
        return res.status(400).json({ message, error: error.message })
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

//validar a requisicao

//validar o token de autenticacao foi enviado