function Button({ onclick, classes }: any) {
  return (
    <div>
      <button
        onClick={onclick}
        className={
          "cursor-pointer hover:font-semibold bg-[#624A37] hover:border-10 hover:rounded-[4em] hover:scale-103 active:scale-97 active:border-6 border-3 border-[#A07F56] rounded-[10em] transition-all duration-150 font-[Funnel_Display] text-[#CAAC89] px-6 py-3 text-2xl sm:text-3xl" +
          classes
        }
      >
        Upload Image
      </button>
    </div>
  );
}

export default Button;
