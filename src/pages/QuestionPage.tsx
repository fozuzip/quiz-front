import QuizBox from "../components/QuizBox";
import OptionButton, { VariantType } from "../components/OptionButton";

import { ReactComponent as GraphicSvg } from "../assets/graphic.svg";

type QuestionPageProps = {
  title: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  correctAnswer: string;
  selectedAnswer: null | string;
  onSelect: (value: string) => void;
};

function QuestionPage({
  title,
  options,
  correctAnswer,
  selectedAnswer,
  onSelect,
}: QuestionPageProps) {
  return (
    <QuizBox>
      <div className="absolute -top-6 right-0">
        <GraphicSvg />
      </div>
      <div className="my-8">
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
    </QuizBox>
  );
}

export default QuestionPage;
