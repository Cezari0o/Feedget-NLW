import { SubmitFeedbackService } from "./submitFeedbackService"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackService(
    {create: createFeedbackSpy }, 
    {sendMail: sendMailSpy }
)

describe('Doing a submit feedback', () => {
    test('Should be able to submit a feedback', async () => {
        
        await expect(submitFeedback.execute( {
            type: 'a',
            comment: "BUG FOUND!!!",
            screenshot: "data:image/png;base64,Screenshot representation",
        })).resolves.not.toThrow()


        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    test("Should not be able to submit an invalid screenshot", async () => {

        await expect(submitFeedback.execute( {
            type: "IDEIA",
            comment: "Hello world",
            screenshot : "Invalid format"
        })).rejects.toThrow()
    })

    test("Should not be able to submit without a comment", async () => {

        await expect(submitFeedback.execute( {
            type: "IDEIA",
            comment: "",
            screenshot : "data:image/png;base64,Screenshot representation"
        })).rejects.toThrow()
    })
})