import { useEffect, useRef, useState, type RefObject } from "react";
import Button from "../Button/Button";

function PreviewThing({ ctx, setCtx }: { ctx: any; setCtx: any }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<any>(null);
  const [texture, setTexture] = useState<HTMLImageElement | null>(null);
  const [logo, setLogo] = useState<HTMLImageElement | null>(null);

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => setImage(img);
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current!;
    if (!canvasRef.current) return;
    const rect = canvas.getBoundingClientRect();

    const scale = window.devicePixelRatio || 1;

    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;

    const cx = canvas.getContext("2d");
    if (!cx) return;

    cx.clearRect(0, 0, canvas.width, canvas.height);

    if (texture) {
      cx.drawImage(texture, 0, 0, canvas.width, canvas.height);
    }

    if (image) {
      const side = Math.min(image.width, image.height);
      const sx = (image.width - side) / 2;
      const sy = (image.height - side) / 2;
      cx.globalCompositeOperation = "hard-light";
      cx.drawImage(
        image,
        sx,
        sy,
        side,
        side,
        0,
        0,
        canvas.width,
        canvas.height,
      );
      cx.globalCompositeOperation = "source-over";
    }
  };

  useEffect(() => {
    const img = new Image();
    img.src = "/logo.png";
    img.onload = () => setLogo(img);

    const tex = new Image();
    tex.src = "/underlay-tex.png";
    tex.onload = () => setTexture(tex);
  }, []);

  useEffect(() => {
    drawCanvas();
  }, [image, texture]);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = "profile.png";
    if (!canvasRef.current) return;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="w-full h-full flex justify-start sm:pt-30 pt-0 gap-10 items-center flex-col">
      <div className="z-100 sm:mt-0 mt-50 flex overflow-hidden justify-center items-center w-[70%] aspect-square bg-[#AD8961] border-3 border-[#624A37] rounded-[3em] md:rounded-[5em]">
        {image && <canvas className="w-full h-full" ref={canvasRef}></canvas>}
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          ref={fileInputRef}
        />
        {!image && (
          <Button
            classes="absolute"
            onclick={() => {
              fileInputRef.current?.click();
            }}
          />
        )}
      </div>

      <button
        onClick={downloadImage}
        className={
          "text-3xl text-[#CAAC89] bg-[#624A37] px-6 py-3 rounded-full font-[Funnel_Display] transition-all duration-300 hover:scale-105 active:scale-98"
        }
      >
        Download
      </button>
    </div>
  );
}

export default PreviewThing;
