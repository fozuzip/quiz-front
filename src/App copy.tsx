import OptionButton from "./components/OptionButton";

import { ReactComponent as GraphicSvg } from "./assets/graphic.svg";

function App() {
  return (
    <div className="flex h-screen w-full flex-col content-center justify-center bg-pattern bg-cover p-4 font-poppins">
      <div className="relative  m-auto w-full md:w-[464px]">
        <h1 className="pb-2 text-4xl font-bold uppercase text-white">
          Country Quiz
        </h1>
        <div className="rounded-3xl bg-white p-8">
          <div className="absolute -top-6 right-0">
            <GraphicSvg />
          </div>
          <div className="my-8">
            <p className="text-2xl font-bold text-dark-text">
              Kuala Lumpur is the capital of
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <OptionButton index={0}>Vietnam</OptionButton>
            <OptionButton index={1}>Malaysia</OptionButton>
            <OptionButton index={2} variant="wrong">
              Sweeden
            </OptionButton>
            <OptionButton index={3} variant="correct">
              Austria
            </OptionButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
