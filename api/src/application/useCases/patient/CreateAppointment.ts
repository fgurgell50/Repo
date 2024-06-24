import DatabaseService from "@/infra/DatabaseService";

export default class CreateAppointementUseCase {
    constructor(readonly database: DatabaseService ) {

    }
    async execute(patientId: number, agendaId: number ) {
        //verifica se o paciente existe com o id passado

        //verififa se a agenda existe com o ID passado e está disponível

        //cria um novo agendamento como ID do paciente e o ID da agenda

    }   
}