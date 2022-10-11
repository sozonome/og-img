/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

import { outfitBold, outfitMedium } from "lib/utils/font/outfit";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const outfitMediumFontData = await outfitMedium;
  const outfitBoldFontData = await outfitBold;

  const { searchParams } = new URL(req.url);
  const heading = searchParams.get("heading")?.slice(0, 100);
  const text = searchParams.get("text")?.slice(0, 200);

  return new ImageResponse(
    (
      <div tw="w-screen h-screen p-12 flex flex-col justify-center bg-black">
        {heading && (
          <h1
            tw="text-6xl font-bold text-gray-300 leading-tight"
            style={{ fontFamily: "Outfit-Bold" }}
          >
            {heading}
          </h1>
        )}
        {text && (
          <p
            tw="font-medium text-3xl text-gray-500"
            style={{ fontFamily: "Outfit-Medium" }}
          >
            {text}
          </p>
        )}
      </div>
    ),
    {
      fonts: [
        {
          name: "Outfit-Medium",
          data: outfitMediumFontData,
          weight: 500,
        },
        {
          name: "Outfit-Bold",
          data: outfitBoldFontData,
          weight: 700,
        },
      ],
    }
  );
}
