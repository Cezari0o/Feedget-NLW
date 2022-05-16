import { CloseButton } from "../../CloseButton";

import successImg from "../../../assets/success.png";

interface  FeedbackSuccessStepProps {
    onFeedbackRestartRequest: () => void;
}



export function FeedbackSuccessStep({onFeedbackRestartRequest}: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton/>
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={successImg} alt="Imagem de um vê" className='w-6 h-6'/>

                <span className="text-xl mt-2"> Agradecemos o feedback!</span>

                <button
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-blue-600"
                    onClick={onFeedbackRestartRequest}
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    );
}