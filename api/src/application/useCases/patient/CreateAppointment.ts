import DatabaseService from "@/infra/DatabaseService";
import { BusinessError, NotFoundError } from "@/infra/helpers/Errors";

export default class CreateAppointementUseCase {
    constructor(readonly database: DatabaseService ) {

    }
    async execute(patientId: number, agendaId: number ) {

        //verifica se o paciente existe com o id passado
        const patient = await this.database.getPatientById( patientId )

        if( !patient ){
            throw new NotFoundError('Patient not found')
        }

        //verififa se a agenda existe com o ID passado e está disponível
        const agenda = await this.database.getAgendaById(agendaId)
        
        if( !agenda?.avaliable ){
            throw new BusinessError('Agenda not available for this date')
        }

        //atualiza a agenda para nao estar mais disponível
        await this.database.updateAgenda( agenda.id, { avaliable: false } )

        //cria um novo agendamento como ID do paciente e o ID da agenda
        const appointment = await this.database.createAppoitment( 
            patient.id, 
            agenda.doctorId, 
            agenda.date 
        )

        //retorna o agendamento criado
        return appointment
    
    }   
}