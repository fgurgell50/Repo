
import DatabaseService from "@/infra/DatabaseService";

export default class GetPatientByPhoneUseCase {
    constructor(readonly database: DatabaseService ) {

    }
    async execute(phone: string) {
        // logica de negocio
        const INCLUDE_APPOINTMENT = true
        const INCLUDE_AGENDA = true
        const patient = await this.database.getPatientByPhone(
            phone, 
            INCLUDE_APPOINTMENT,
            INCLUDE_AGENDA
        )

        if(!patient){
            throw new Error('No doctot found')
        }

        return patient
    }   
}