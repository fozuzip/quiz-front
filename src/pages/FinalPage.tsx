import QuizBox from "../components/QuizBox";
import Button from "../components/Button";
import { ReactComponent as WinnersSvg } from "../assets/winners.svg";

function FinalPage({}) {
  return (
    <QuizBox>
      <div className="flex flex-col items-center">
        <WinnersSvg />
        <div className="my-24 flex flex-col items-center">
          <h2 className=" text-5xl font-bold text-darker-text">Results</h2>
          <p className="text-md mt-6 text-dark-text">
            You got <span className="text-3xl font-bold text-green">4</span>{" "}
            correct answers
          </p>
        </div>

        <Button variation="plain" onClick={() => null}>
          Try Again
        </Button>
      </div>
    </QuizBox>
  );
}

export default FinalPage;
