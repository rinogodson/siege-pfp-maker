import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";

function PreviewThing({ ctx }: { ctx: any }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<any>(null);
  const [logo, setLogo] = useState<any>(null);
  const [texture_under, setTexture_under] = useState<any>(null);
  const [texture_over, setTexture_over] = useState<any>(null);
  const [castle, setCastle] = useState<any>(null);
  const [meeples, setMeeples] = useState<any[]>([]);

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

    if (texture_under) {
      cx.drawImage(texture_under, 0, 0, canvas.width, canvas.height);
    }

    if (image) {
      const side = Math.min(image.width, image.height);
      const sx = (image.width - side) / 2;
      const sy = (image.height - side) / 2;
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
    }

    if (texture_over) {
      cx.globalCompositeOperation = "overlay";
      cx.globalAlpha = ctx.strength / 100;
      cx.drawImage(texture_over, 0, 0, canvas.width, canvas.height);
      cx.globalAlpha = 1.0;
      cx.globalCompositeOperation = "source-over";
    }
    if (texture_over) {
      cx.globalCompositeOperation = "overlay";
      cx.globalAlpha = ctx.strength / 100;
      cx.drawImage(texture_over, 0, 0, canvas.width, canvas.height);
      cx.globalCompositeOperation = "source-over";
      cx.globalAlpha = 1.0;
    }
    if (ctx.logoEnabled) {
      cx.drawImage(logo, 0, 0, canvas.width, canvas.height);
    }
    if (ctx.castleEnabled) {
      cx.drawImage(castle, 0, 0, canvas.width, canvas.height);
    }

    if (meeples && ctx.meepleEnabled) {
      switch (ctx.selectedMeeple) {
        case 0:
          cx.drawImage(meeples[0], 0, 0, canvas.width, canvas.height);
          break;
        case 1:
          cx.drawImage(meeples[1], 0, 0, canvas.width, canvas.height);
          break;
        case 2:
          cx.drawImage(meeples[2], 0, 0, canvas.width, canvas.height);
          break;
        case 3:
          cx.drawImage(meeples[3], 0, 0, canvas.width, canvas.height);
          break;
      }
    }
  };

  useEffect(() => {
    const lgo = new Image();
    lgo.src = "/logo.png";
    lgo.onload = () => setLogo(lgo);

    const tex = new Image();
    tex.src = "/underlay-tex.png";
    tex.onload = () => setTexture_under(tex);

    const tex2 = new Image();
    tex2.src = "/underlay-tex.png";
    tex2.onload = () => setTexture_over(tex2);

    const cas = new Image();
    cas.src = "/castle.png";
    cas.onload = () => setCastle(cas);

    const colors = ["red", "blue", "green", "purple"];
    const loaded: HTMLImageElement[] = [];
    colors.forEach((color) => {
      const img = new Image();
      img.src = "/meeple-" + color + ".png";
      img.onload = () => {
        loaded.push(img);
        if (loaded.length === colors.length) {
          setMeeples(loaded);
        }
      };
    });
  }, []);

  useEffect(() => {
    drawCanvas();
  }, [image, texture_under, texture_over, logo, castle, ctx]);

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
