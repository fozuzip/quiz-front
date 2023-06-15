import { useState, useEffect } from "react";
import QuestionPage from "./pages/QuestionPage";
import FinalPage from "./pages/FinalPage";

import useCountryQuestions from "./utils/useCountryQuestions";

const TOTAL_QUESTIONS = 1;

function App() {
  const [questionCount, setQuestionCount] = useState(1);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<null | string>(null);

  const { question, generateQuestion } = useCountryQuestions();

  const selectAnswer = (value: string) => {
    if (value === question?.correctAnswer) {
      setCorrectCount(correctCount + 1);
    }
    setSelectedAnswer(value);
  };
  const nextQuestion = () => {
    setQuestionCount(questionCount + 1);
    setSelectedAnswer(null);
    generateQuestion();
  };
  console.log(correctCount);
  return (
    <div className="flex h-screen w-full flex-col content-center justify-center bg-pattern bg-cover p-4 font-poppins">
      <div className="relative  m-auto w-full md:w-[464px]">
        <h1 className="pb-2 text-4xl font-bold uppercase text-white">
          Country Quiz
        </h1>
        {questionCount < TOTAL_QUESTIONS + 1 ? (
          question && (
            <>
              <QuestionPage
                {...question}
                selectedAnswer={selectedAnswer}
                onSelect={selectAnswer}
                onNext={nextQuestion}
              />
              <div className="text-bold text-bold mr-2 mt-2 text-right text-sm text-white">{`${questionCount} / ${TOTAL_QUESTIONS}`}</div>
            </>
          )
        ) : (
          <FinalPage />
        )}
      </div>
    </div>
  );
}

export default App;
