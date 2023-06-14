import { useState } from "react";
import QuestionPage from "./pages/QuestionPage";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState<null | string>(null);

  const question = {
    title: "Kuala Lumpur is the capital of",
    options: [
      {
        value: "a",
        label: "Vietnam",
      },
      {
        value: "b",
        label: "Malaysia",
      },
      {
        value: "c",
        label: "Sweeden",
      },
      {
        value: "d",
        label: "Austria",
      },
    ],
    correctAnswer: "b",
  };

  const selectAnswer = (value: string) => setSelectedAnswer(value);

  console.log(selectedAnswer);
  return (
    <div className="flex h-screen w-full flex-col content-center justify-center bg-pattern bg-cover p-4 font-poppins">
      <div className="relative  m-auto w-full md:w-[464px]">
        <h1 className="pb-2 text-4xl font-bold uppercase text-white">
          Country Quiz
        </h1>
        <QuestionPage
          {...question}
          selectedAnswer={selectedAnswer}
          onSelect={selectAnswer}
        />
      </div>
    </div>
  );
}

export default App;
