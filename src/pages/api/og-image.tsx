import { withOGImage } from "next-api-og-image";

export default withOGImage({
  template: { react: ({ myQueryParam }) => <h1>{myQueryParam}</h1> },
});
