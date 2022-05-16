import React from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStep {
    onFBTypeChange : (type: FeedbackType | null) => void;
}

export function FeedbackTypeStep(props : FeedbackTypeStep) {

    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe o seu Feedback</span>
                <CloseButton/>
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-blue-600 focus:border-blue-600 focus:outline-none"
                            onClick={() => props.onFBTypeChange((key as FeedbackType))}
                            type="button"
                        >
                            <img src={value['image'].source} alt={value['image'].alt}/>
                            <span>{value['title']}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}