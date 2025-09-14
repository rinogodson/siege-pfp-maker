// @ts-nocheck
import type { ReactElement } from "react";
import "./Slider.css";
import { Spotlight } from "lucide-react";

function Slider({
  minimum = 0,
  maximum = 100,
  text = "Effect Strength",
  value,
  onChangeFn,
  style,
}: {
  minimum: number;
  maximum: number;
  text?: string;
  value: number;
  onChangeFn: any;
  style?: any;
}) {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] border-1 border-[rgba(255,255,255,0.1)] text-black text-2xl w-full h-30 p-3 pt-0 flex flex-col justify-end items-center rounded-[33.5px]">
      <div className="flex flex-row h-full w-full justify-between items-center px-2">
        <div className="flex justify-center items-center gap-2 py-1">
          <Spotlight />
          <p className="h-full flex justify-center items-center font-[Funnel_Display]">
            {text}
          </p>
        </div>
        <p>{value}</p>
      </div>
      <div className="slider-bg self-end w-full justify-self-end">
        <input
          className="slider"
          type="range"
          min={minimum}
          max={maximum}
          value={value}
          onChange={onChangeFn}
          id="range"
        />
      </div>
    </div>
  );
}

export default Slider;
