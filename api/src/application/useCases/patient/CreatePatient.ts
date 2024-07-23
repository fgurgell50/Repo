import DatabaseService from "@/infra/DatabaseService";
import { BusinessError } from "@/infra/helpers/Errors";
import { hashPassword } from "@/infra/helpers/SecurityHelper";

export default class CreatePatientUseCase {
    constructor(readonly database: DatabaseService ) {

    }
    async execute(name: string, phone: string, password: string) {
        // verificar se paciente existe na base
        const patient = await this.database.getPatientByPhone(phone)

        if(patient){
            throw new BusinessError('Patiente already exists with this number phone')
        }

        // gerar um hash seguro para a senha 
        const hashedPassword = hashPassword(password)

        // adicionar um novo usuario com este telefone
        const user = await this.database.createUser(phone, hashedPassword)

        //adiciona o paciente com o nome, phone e id  do usuario criado
        const newPatient = await this.database.createPatient(name, phone, user.id)

        // retorna o usuario criado 
        return newPatient

    }   
}