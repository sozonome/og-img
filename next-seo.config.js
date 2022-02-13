/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "og-img",
  titleTemplate: "%s | og-img",
  defaultTitle: "og-img",
  description: "OpenGgraph image serverless service",
  canonical: "https://og.sznm.dev",
  openGraph: {
    url: "https://og.sznm.dev",
    title: "og-img",
    description: "OpenGgraph image serverless service",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "og-image",
      },
    ],
    site_name: "og-img",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
