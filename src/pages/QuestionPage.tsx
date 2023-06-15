import QuizBox from "../components/QuizBox";
import OptionButton, { VariantType } from "../components/OptionButton";
import Button from "../components/Button";

import { ReactComponent as GraphicSvg } from "../assets/graphic.svg";

type QuestionPageProps = {
  type: "capital" | "flag";
  flag: { img: string; alt: string } | null;
  title: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  correctAnswer: string;
  selectedAnswer: null | string;
  onSelect: (value: string) => void;
  onNext: () => void;
};

function QuestionPage({
  title,
  flag,
  options,
  correctAnswer,
  selectedAnswer,
  onSelect,
  onNext,
}: QuestionPageProps) {
  return (
    <QuizBox>
      <div className="absolute -top-6 right-0">
        <GraphicSvg />
      </div>
      <div className="my-8">
        {flag && (
          <img
            width={84}
            height={54}
            className="mb-4"
            src={flag.img}
            alt={flag.alt}
          />
        )}
        <p className="text-dark-text text-2xl font-bold">{title}</p>
      </div>
      <div className="flex flex-col gap-6">
        {options.map(({ label, value }, index) => {
          let variant: VariantType = "option";

          if (!!selectedAnswer) {
            if (value === selectedAnswer) {
              variant = "wrong";
            }
            if (value === correctAnswer) {
              variant = "correct";
            }
          }

          return (
            <OptionButton
              variant={variant}
              key={value}
              index={index}
              isSelectable={!selectedAnswer}
              onClick={() => onSelect(value)}
            >
              {label}
            </OptionButton>
          );
        })}
      </div>
      {selectedAnswer && (
        <div className="mt-6 flex justify-end">
          <Button onClick={onNext}>Next</Button>
        </div>
      )}
    </QuizBox>
  );
}

export default QuestionPage;
