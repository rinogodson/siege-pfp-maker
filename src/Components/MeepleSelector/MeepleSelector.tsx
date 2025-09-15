function MeepleSelector({ setCtx, ctx }: any) {
  return (
    <div
      style={{
        opacity: ctx.meepleEnabled ? "1" : "0.5",
        pointerEvents: ctx.meepleEnabled ? "auto" : "none",
      }}
      className="flex bg-[rgba(0,0,0,0.2)] w-full sm:h-full h-20 rounded-4xl p-2"
    >
      <div
        onClick={() => {
          setCtx((prev: any) => ({ ...prev, selectedMeeple: 0 }));
        }}
        style={{ background: ctx.selectedMeeple == 0 ? "#AD8961" : "none" }}
        className="w-full h-full rounded-[1.5em] flex justify-center items-center transition-all duration-300"
      >
        <img src="mees/mee_red.png" className="sm:w-10 w-7" />
      </div>
      <div
        onClick={() => {
          setCtx((prev: any) => ({ ...prev, selectedMeeple: 1 }));
        }}
        style={{ background: ctx.selectedMeeple == 1 ? "#AD8961" : "none" }}
        className="w-full h-full rounded-[1.5em] flex justify-center items-center transition-all duration-300"
      >
        <img src="mees/mee_blue.png" className="sm:w-10 w-7" />
      </div>
      <div
        onClick={() => {
          setCtx((prev: any) => ({ ...prev, selectedMeeple: 2 }));
        }}
        style={{ background: ctx.selectedMeeple == 2 ? "#AD8961" : "none" }}
        className="w-full h-full rounded-[1.5em] flex justify-center items-center transition-all duration-300"
      >
        <img src="mees/mee-purple.png" className="sm:w-10 w-7" />
      </div>
      <div
        onClick={() => {
          setCtx((prev: any) => ({ ...prev, selectedMeeple: 3 }));
        }}
        style={{ background: ctx.selectedMeeple == 3 ? "#AD8961" : "none" }}
        className="w-full h-full rounded-[1.5em] flex justify-center items-center transition-all duration-300"
      >
        <img src="mees/mee_green.png" className="sm:w-10 w-7" />
      </div>
    </div>
  );
}

export default MeepleSelector;
