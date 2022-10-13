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
        url: "https://og.sznm.dev/api/generate?heading=Open%20Graph%20Image%20Generator&text=https://og.sznm.dev",
        alt: "og-img",
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
