import QuizBox from "../components/QuizBox";
import Button from "../components/Button";
import { ReactComponent as WinnersSvg } from "../assets/winners.svg";
import clsx from "clsx";

type FinalPageType = {
  correctAnswers: number;
  onTryAgain: () => void;
};

function FinalPage({ correctAnswers, onTryAgain }: FinalPageType) {
  return (
    <QuizBox>
      <div className="flex flex-col items-center">
        <WinnersSvg />
        <div className="my-24 flex flex-col items-center">
          <h2 className=" text-5xl font-bold text-darker-text">Results</h2>
          <p className="text-md mt-4 text-dark-text">
            You got{" "}
            <span
              className={clsx(
                "ml-1 mr-1 text-3xl font-bold",
                correctAnswers > 0 ? "text-green" : "text-red"
              )}
            >
              {correctAnswers}
            </span>
            correct {correctAnswers === 1 ? "answer" : "answers"}
          </p>
        </div>

        <Button variation="plain" onClick={onTryAgain}>
          Try Again
        </Button>
      </div>
    </QuizBox>
  );
}

export default FinalPage;
