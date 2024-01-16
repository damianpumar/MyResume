import { Resvg, type ResvgRenderOptions } from "@resvg/resvg-js";
import type { APIRoute } from "astro";
import satori from "satori";
import { html as toReactElement } from "satori-html";
import { personal } from "src/configuration";
import { homepage } from "package.json";

const fontFile = await fetch(
  "https://og-playground.vercel.app/inter-latin-ext-700-normal.woff"
);

const fontData: ArrayBuffer = await fontFile.arrayBuffer();

const height = 630;
const width = 1200;

export const GET: APIRoute = async () => {
  const link = homepage;
  const html = toReactElement(`
  <div style="background-color: white; display: flex; flex-direction: column; height: 100%; padding: 3rem; width: 100%">
    <div style="display:flex; height: 100%; width: 100%; background-color: white; border: 6px solid black; border-radius: 0.5rem; padding: 2rem; filter: drop-shadow(6px 6px 0 rgb(0 0 0 / 1));">
      <div style="display: flex; flex-direction: column; justify-content: space-between; width: 100%; filter: drop-shadow()">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <p style="font-size: 48px;">${personal.name}</p>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; padding-top: -2rem;">
          <p style="font-size: 32px">${link}</p>
          <img src="https://media.licdn.com/dms/image/D4D03AQE9Z84F3DJD6g/profile-displayphoto-shrink_800_800/0/1704028128023?e=1709769600&v=beta&t=gy7ObKMHXkuZCuika2Taudatu03sly39yTLa3e52Ljo" width="200px" height="200px" style="border: 3px solid black; border-radius: 0.5rem;" />
        </div>
      </div>
    </div>
  </div>
  `);

  const svg = await satori(html, {
    fonts: [
      {
        name: "Inter Latin",
        data: fontData,
        style: "normal",
      },
    ],

    height,
    width,
  });

  const opts: ResvgRenderOptions = {
    fitTo: {
      mode: "width",
      value: width,
    },
  };
  const resvg = new Resvg(svg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      "content-type": "image/png",
    },
  });
};
