import { css } from "@styled-system/css";
import type { HeaderProps } from "./types";

const styles = css({
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
});

const Header: React.FC<HeaderProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return <div className={styles}>{children}</div>;
};

export { Header };
