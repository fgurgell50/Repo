
import DatabaseService from "@/infra/DatabaseService";

export default class GetDoctorByIdUseCase {
    constructor(readonly database: DatabaseService ) {

    }
    async execute(id: number) {
        // logica de negocio
        const INCLUDE_AGENDA = true
        const doctor = await this.database.getDoctorById(
            id,
            INCLUDE_AGENDA
        )

        if(!doctor){
            throw new Error('No doctot found')
        }

        return doctor
    }   
}