type QuizBoxType = {
  children?: React.ReactNode;
};

function QuizBox({ children }: QuizBoxType) {
  return <div className="rounded-3xl bg-white p-8">{children}</div>;
}
export default QuizBox;
