
import DatabaseService from "@/infra/DatabaseService";
import { NotFoundError } from "@/infra/helpers/Errors";

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
            throw new NotFoundError('No doctot found')
        }

        return doctor
    }   
}