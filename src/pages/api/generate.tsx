/* eslint-disable @next/next/no-head-element */
// https://play.tailwindcss.com/TYb0XtCyeG?size=1100x720
/**
 * https://github.com/neg4n/next-api-og-image#configuration
 */

import { withOGImage } from "next-api-og-image";

export default withOGImage({
  template: {
    react: ({ heading, text }) => (
      <>
        <head>
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/@fontsource/outfit@4.5.4/latin.css"
            rel="stylesheet"
          />
        </head>
        <div
          className="min-h-screen bg-black p-12 flex flex-col justify-center gap-4"
          style={{ fontFamily: "Outfit" }}
        >
          <h1 className="text-6xl font-bold text-gray-300 leading-tight">
            {heading}
          </h1>
          <p className="font-medium text-3xl text-gray-500">{text}</p>
        </div>
      </>
    ),
  },
  // type: "png",
  // dev: {
  //   // Whether to replace binary data (image/screenshot) with HTML
  //   // that can be debugged in Developer Tools
  //   inspectHtml: true,
  //   // Whether to set error message in response
  //   // if there are strategy related errors
  //   errorsInResponse: true,
  // },
});
