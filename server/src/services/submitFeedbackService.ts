import { MailService } from "../externalServices/mailService";
import { FeedbackRepository } from "../repositories/feedbackRepo";

interface SubmitFeedbackServiceRequest {
    type: string,
    comment: string,
    screenshot?: string,
}

export class SubmitFeedbackService {
    constructor(
        private feedbackRepository: FeedbackRepository,
        private mailService: MailService,
    ) {}

    async execute({type, comment, screenshot}: SubmitFeedbackServiceRequest) {


        if(!type || !comment) {
            throw new Error("Type or comment is not valid!")
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error("Screenshot format is invalid!")
        }

        await this.feedbackRepository.create( {
            type,
            comment,
            screenshot,
        })

        await this.mailService.sendMail( {
            subject: "Novo Feedback",
            body:[
                `<div style="font-family: sans-serif; font-size:14px; color: #222;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `<p>Foto: ${screenshot}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}