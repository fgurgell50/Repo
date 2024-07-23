import 'express-async-errors';
import express from "express"
import cors from "cors"
import helmet from "helmet"

import DoctorController from '@/application/controller/DoctorController';
import PatientController from '@/application/controller/PatientController';

import { validateBody, validateParams } from '@/infra/ValidationMiddeware';
import { 
    authenticationSchema, 
    createAppointmentAgendaIdSchema, 
    createPatientePatientIdSchema, 
    getDoctorByIdSchema, 
    getPatientByPhoneSchema} 
    from '@/infra//ValidationSchemas';

export default class Router {
    app: express.Express

    constructor(
        readonly doctorController: DoctorController,
        readonly patientController: PatientController
    )
    {
        this.app = express()
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(express.json())

        this.setRouter()
    }

    private setRouter(){
        // Rotas da Aplicacao
        this.app.post(
            '/authenticate', 
            validateBody(authenticationSchema),
            this.patientController.authenticate
        )

        this.app.get('/', (req,res) => {
            res.send('Hello App')
        })

        this.app.get(
            '/doctors', 
            this.doctorController.listDoctor
        )
        this.app.get(
            '/doctors/:id',
            validateParams(getDoctorByIdSchema),
            this.doctorController.getDoctorById
        )
        this.app.post(
            '/patient', 
            this.patientController.createPatient
        )
        this.app.get(
            '/patient/:phone', 
            validateParams(getPatientByPhoneSchema),
            this.patientController.getPatientByPhone
        )
        this.app.post(
            '/patient/:patientId/appointment', 
            validateParams(createAppointmentAgendaIdSchema),
            validateBody(createPatientePatientIdSchema),
            this.patientController.createAppointment 
        )

    }

    public start(port: number) {
        this.app.listen(port, ()=>{
            console.log(`Server running on port ${port}`)
        })
    }
}