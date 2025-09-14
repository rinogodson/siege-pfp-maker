import React from "react";
import PreviewThing from "./Components/PreviewThing/PreviewThing";

function App() {
  const [ctx, setCtx] = React.useState({ imageUploaded: false });
  return (
    <div
      style={{ backgroundImage: "url(/bg.jpg)" }}
      className="w-screen h-screen flex flex-col gap-10 grid-cols-[6fr_8fr] sm:grid place-items-center"
    >
      <PreviewThing ctx={ctx} setCtx={setCtx} />
      <div className="overflow-scroll items-center flex justify-between flex-col h-full sm:pt-20 pt-0 w-full">
        <img
          src="./header.png"
          className="sm:block absolute top-10 sm:top-15 mt-3 sm:w-[200px] w-[150px]"
        />
        <div className="sm:overflow-hidden overflow-scroll z-100 bg-[#AD8961] border-3 border-b-0 border-[#624A37] w-[90%] h-fit min-h-full sm:mt-50 mt-0"></div>
      </div>
    </div>
  );
}

export default App;
