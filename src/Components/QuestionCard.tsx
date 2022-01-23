import React from 'react';
import { AnswerObject } from '../App';

//import {AnswerObject} from '../app';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr, totalQuestions
}) => {
    return (
        <div className = "bg-white shadow-lg rounded p-5">
            <p className="number">
                Question:{questionNr} / {totalQuestions}
            </p>
            <p  className = "text-xl text-bold"dangerouslySetInnerHTML={{ __html: question }} />
            <div className = "flex flex-col justify-center items-stretch">
                {answers.map(answer => (
                    <div key={answer}>
                        <button className = "bg-blue-500 w-4/5 my-2 rounded text-white text-semibold hover:bg-blue-900 mx-auto" disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>

    )
};

export default QuestionCard;
