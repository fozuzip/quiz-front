import { ReactComponent as GraphicSvg } from "./assets/graphic.svg";

function App() {
  return (
    <div className="flex h-screen w-full flex-col content-center justify-center bg-pattern bg-cover p-4 font-poppins">
      <div className="m-auto  w-full md:w-[464px]">
        <h1 className="pb-2 text-4xl font-bold uppercase text-white">
          Country Quiz
        </h1>
        <div className="rounded-3xl bg-white p-8">
          <GraphicSvg />
          <p>Kuala Lumpur is the capital of</p>
        </div>
      </div>
    </div>
  );
}

export default App;
