function MeepleSelector() {
  return (
    <div className="flex bg-[rgba(0,0,0,0.1)] w-full sm:h-full h-20 rounded-4xl p-2">
      <div
        style={{ background: "#AD8961" }}
        className="w-full h-full rounded-[1.5em] flex justify-center items-center"
      >
        <img src="mees/mee_red.png" className="sm:w-10 w-7" />
      </div>
      <div
        style={{ background: "none" }}
        className="w-full h-full rounded-[1.5em] flex justify-center items-center"
      >
        <img src="mees/mee_blue.png" className="sm:w-10 w-7" />
      </div>
      <div
        style={{ background: "none" }}
        className="w-full h-full rounded-[1.5em] flex justify-center items-center"
      >
        <img src="mees/mee_green.png" className="sm:w-10 w-7" />
      </div>
      <div
        style={{ background: "none" }}
        className="w-full h-full rounded-[1.5em] flex justify-center items-center"
      >
        <img src="mees/mee-purple.png" className="sm:w-10 w-7" />
      </div>
    </div>
  );
}

export default MeepleSelector;
