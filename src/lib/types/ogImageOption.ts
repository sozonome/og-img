export type OgImageOption = {
  heading?: string;
  text?: string;
  template?: string;
  center?: boolean;
};

export type OgImageOptionConverted = Omit<OgImageOption, "center"> & {
  center?: string;
};
