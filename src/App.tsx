import React from "react";
import PreviewThing from "./Components/PreviewThing/PreviewThing";
import Toggle from "./Components/Toggle/Toggle";
import { Castle, Signature, User } from "lucide-react";
import MeepleSelector from "./Components/MeepleSelector/MeepleSelector";

function App() {
  const [ctx, setCtx] = React.useState({ imageUploaded: false });
  const imgRef = React.useRef(null);

  const [test, setTest] = React.useState(false);

  return (
    <div
      style={{ backgroundImage: "url(bg.jpg)" }}
      className="w-screen h-screen flex flex-col gap-10 grid-cols-[6fr_8fr] sm:grid place-items-center"
    >
      <PreviewThing ctx={ctx} setCtx={setCtx} />
      <div className="overflow-scroll items-center flex justify-between flex-col h-full sm:pt-20 pt-0 w-full">
        <img
          src="./header.png"
          className="sm:block absolute top-10 sm:top-15 mt-3 sm:w-[200px] w-[150px]"
        />
        <div className="flex flex-col items-center gap-5 p-10 sm:overflow-hidden overflow-scroll z-100 bg-[#AD8961] border-3 border-b-0 border-[#624A37] w-[90%] h-fit min-h-full sm:mt-50 mt-0">
          <div className="flex w-full gap-5 sm:flex-row flex-col">
            <Toggle
              value={test}
              setValue={setTest}
              icon={<Castle size={35} />}
              text="Castle"
            />
            <Toggle
              value={test}
              setValue={setTest}
              icon={<Signature size={35} />}
              text="Logo"
            />
          </div>
          <div className="w-full p-5 bg-[rgba(0,0,0,0.1)] rounded-[3.25rem] flex sm:flex-row flex-col gap-5">
            <Toggle
              value={test}
              setValue={setTest}
              icon={<User size={35} />}
              text="Meeple"
            />
            <MeepleSelector />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
