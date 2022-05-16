import { MailService, SendMailData } from "../mailService";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9b5e30ae107a78",
      pass: "3cb7cb388608fe"
    }
});

export class NodemailerMailService implements MailService {
    async sendMail(data: SendMailData) {
    
    
        await transport.sendMail( {
            from: 'Equipe Feedget <feedback@feedget.com>',
            to: 'Cezar Cezario <gcesario034@gmail.com',
            subject: data.subject,
            html: data.body 
        })
    }
}