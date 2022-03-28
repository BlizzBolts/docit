export interface ShowCodeProps extends MobileView {
  code: string;
  lang: string;
  get: () => any;
}

export interface MobileView {
  mobileView?: boolean;
}
