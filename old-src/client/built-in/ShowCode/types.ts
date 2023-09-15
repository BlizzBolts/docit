export interface ShowCodeProps extends MobileView {
  code: string;
  lang: string;
  moduleId: string;
}

export interface MobileView {
  mobileView?: boolean;
}
