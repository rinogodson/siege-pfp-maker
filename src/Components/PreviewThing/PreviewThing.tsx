import Button from "../Button/Button";

function PreviewThing({ ctx, setCtx }: { ctx: any; setCtx: any }) {
  return (
    <div className="z-100 sm:mt-0 mt-50 flex justify-center items-center w-[70%] aspect-square bg-[#AD8961] border-3 border-[#624A37] rounded-[3em] md:rounded-[5em]">
      <Button />
    </div>
  );
}

export default PreviewThing;
