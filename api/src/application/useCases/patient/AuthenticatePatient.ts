import DatabaseService from "@/infra/DatabaseService";
import { comparePassword, encodeToBase64 } from "@/infra/helpers/SecurityHelper";

export default class AuthenticatePatientUseCase{
    constructor(readonly database: DatabaseService) {}
    
    async execute(phone: string, password: string) {
        //verifica se o paciente existe com o telefone passado

        const user = await this.database.getUserByPhone(phone)

        if(!user){
            throw new Error('Patiente not found')
        }

        //converte a senha oara hash
        //const hashedPassword = await hashPassword(password)

        //verifica se a senha passada é igual a senha do paciente
        const isPasswordValid = comparePassword(password, user.password)

        if(!isPasswordValid){
            throw new Error('Phone or Password is Invalid')
        }

        //retorno um token de autenticacao
        const payload = {
            user:{
                id: user.id,
                phone: user.phone
            },
        }

        return {
            token: encodeToBase64(JSON.stringify(payload))
        }
    }
}