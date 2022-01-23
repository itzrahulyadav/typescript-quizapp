import React, { useState } from 'react';
import { isElementAccessExpression } from 'typescript';
import { fetchQuizQuestions } from './Components/API';
import { Difficulty, QuestionState } from './Components/API';
//components
import QuestionCard from './Components/QuestionCard';
import Spinner from './Components/Spinner';
import Info from './Components/Info';

//styles
import './app.css'

const TOTAL_QUESTIONS = 10;
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

}

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(p => p + 1)

      const answerObject: AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }
  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    }
    else {
      setNumber(nextQuestion)
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center p-5">
      <h1 className="font-bold text-2xl ">Quiz for you</h1>
      {gameOver || userAnswers.length == TOTAL_QUESTIONS ? (
        <button className="bg-pink-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 start" onClick={startTrivia}>
          Start
        </button>) : null}
      {!gameOver ? <p className="score">
        Score:{score}
      </p> : null}
      {loading && <Spinner />}
      {!loading && !gameOver ? (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />):<Info />}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS ? (
        <button className='bg-pink-500 mt-5 rounded-full px-5 py-1 text-white font-semibold' onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
      
    </div>
  );
}

export default App;
