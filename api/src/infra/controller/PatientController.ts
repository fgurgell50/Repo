import { Request, Response } from "express";
import  { database } from "@/infra//DatabaseService";
import PatientController from "@/application/controller/PatienteController";
import CreatePatientUseCase from "@/application/useCases/patient/CreatePatient";
import CreateAppointementUseCase from "@/application/useCases/patient/CreateAppointment";

export default class PatientControllerImpl implements PatientController{


    async createPatient(req: Request, res: Response){
        const { name, phone, password } = req.body
        const useCase = new CreatePatientUseCase(database)
        const patient = await useCase.execute(name, phone, password)

        res.status(201).json(patient)
    }

    async createAppointment(req: Request, res: Response){
        const { patientId, agendaId } = req.body
        const useCase = new CreateAppointementUseCase(database)
        const appointment =await useCase.execute( patientId, agendaId )
        
        res.status(201).json(appointment)
    }

}

