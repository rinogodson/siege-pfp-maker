import React from "react";
import PreviewThing from "./Components/PreviewThing/PreviewThing";
import Toggle from "./Components/Toggle/Toggle";
import { Castle, Signature, User } from "lucide-react";
import MeepleSelector from "./Components/MeepleSelector/MeepleSelector";
import Slider from "./Components/Slider/Slider";

function App() {
  const [ctx, setCtx] = React.useState({
    imageUploaded: false,
    meepleEnabled: true,
    selectedMeeple: 0,
    logoEnabled: true,
    castleEnabled: true,
    strength: 80,
  });

  return (
    <div
      style={{ backgroundImage: "url(bg.jpg)" }}
      className="w-screen h-screen flex flex-col gap-10 grid-cols-[6fr_8fr] sm:grid place-items-center"
    >
      <PreviewThing ctx={ctx} />
      <div className="overflow-scroll items-center flex justify-between flex-col h-full sm:pt-20 pt-0 w-full">
        <img
          src="./header.png"
          className="sm:block absolute top-10 sm:top-15 mt-3 sm:w-[200px] w-[150px]"
        />
        <div className="w-[95%] h-fit min-h-full sm:mt-50 mt-0 p-5 bg-[rgba(173,137,97,0.5)]  border-3 border-b-0 border-[#624A37]">
          <div className="w-full h-full flex flex-col items-center gap-5 p-10 sm:overflow-hidden overflow-scroll z-100 border-3 border-b-0 border-[#7E664E] border-dashed ">
            <div className="flex w-full gap-5 sm:flex-row flex-col">
              <Toggle
                value={ctx.castleEnabled}
                setValue={() => {
                  setCtx((prev: any) => ({
                    ...prev,
                    castleEnabled: !prev.castleEnabled,
                  }));
                }}
                icon={<Castle size={35} />}
                text="Castle"
              />
              <Toggle
                value={ctx.logoEnabled}
                setValue={() => {
                  setCtx((prev: any) => ({
                    ...prev,
                    logoEnabled: !prev.logoEnabled,
                  }));
                }}
                icon={<Signature size={35} />}
                text="Logo"
              />
            </div>
            <div className="w-full p-5 border-4 border-dashed border-[#8B6D4E] rounded-[3.25rem] flex sm:flex-row flex-col gap-5">
              <Toggle
                value={ctx.meepleEnabled}
                setValue={() => {
                  setCtx((prev: any) => ({
                    ...prev,
                    meepleEnabled: !prev.meepleEnabled,
                  }));
                }}
                icon={<User size={35} />}
                text="Meeple"
              />
              <MeepleSelector ctx={ctx} setCtx={setCtx} />
            </div>
            <Slider
              minimum={0}
              maximum={100}
              value={ctx.strength}
              onChangeFn={(e: any) => {
                setCtx((p: any) => ({
                  ...p,
                  strength: parseInt(e.target.value),
                }));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
