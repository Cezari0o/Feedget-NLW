import { CloseButton } from "../CloseButton";

import bugURL from '../../assets/bug.png';
import lampURL from '../../assets/idea.png';
import balonURL from '../../assets/thought.png';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Bug",
        image: {
            source: bugURL,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: lampURL,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: balonURL,
            alt: 'Imagem de um balão pensativo'
        }
    },
};


export type FeedbackType = keyof typeof feedbackTypes;

// bg-[#140736]
export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)


    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

                {feedbackSent? (
                    <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback}/>
                    ) : (
                        <>
                            {!feedbackType? (
                                <FeedbackTypeStep onFBTypeChange={setFeedbackType}/>
                        ) : (
                            <FeedbackContentStep 
                                feedbackType={feedbackType}
                                onFeedbackRestartRequest={handleRestartFeedback}
                                onFeedbackSent={() => setFeedbackSent(true)}
                            />
                        )}
                        </>
                )}

            <footer className="text-xs text-neutral-400">
                Feito por <a className="no-underline font-semibold" href="https://github.com/Cezari0o">@Cezari0o</a>
            </footer>
        </div>
    );
}