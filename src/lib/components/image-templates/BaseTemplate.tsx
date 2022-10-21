/* eslint-disable react/no-unknown-property */

type BaseTemplateProps = {
  heading?: string;
  text?: string;
};

const BaseTemplate = ({ heading, text }: BaseTemplateProps) => {
  return (
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
  );
};

export default BaseTemplate;
