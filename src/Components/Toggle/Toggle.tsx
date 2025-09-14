function Toggle({
  value,
  setValue,
  icon,
  text,
}: {
  value: boolean;
  setValue: any;
  icon: any;
  text: string;
}) {
  return (
    <div
      onClick={setValue}
      style={{
        background: value ? "#7A0B07" : "#C3A983",
        color: value ? "#C3A983" : "#7A0B07",
      }}
      className="hover:scale-107 active:scale-100 flex items-center justify-center gap-4 cursor-pointer select-none border-3 sm:w-fit w-full text-3xl sm:text-4xl border-[#7A0B07] font-[Funnel_Display] h-fit px-6 py-4 rounded-4xl transition-all duration-300"
    >
      {icon}
      <p>{text}</p>
    </div>
  );
}

export default Toggle;
