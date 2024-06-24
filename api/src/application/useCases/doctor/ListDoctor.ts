import DatabaseService from "@/infra/DatabaseService";

export default class ListDoctorUseCase {
    constructor(readonly database: DatabaseService ) {

    }
    async execute() {
        // logica de negocio
        const doctors = await this.database.listDoctor()

        if(!doctors){
            throw new Error('No doctot found')
        }

        return doctors
    }   
}