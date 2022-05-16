import express from 'express'
import { NodemailerMailService } from './externalServices/nodemailer/nodemailerMailService';
import { PrismaFeedbackRepository } from './repositories/prisma/prismaFeedbackRepo';
import { SubmitFeedbackService } from './services/submitFeedbackService';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {

    const {type, comment, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerMailService = new NodemailerMailService()
    const submitFeedbackService = new SubmitFeedbackService(
        prismaFeedbackRepository, nodemailerMailService
    )

    await submitFeedbackService.execute( {
        type,
        comment,
        screenshot
    })

    return res.status(201).send()
})