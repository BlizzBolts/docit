import React from "react";
import { Svgs } from "../Svgs";
import { StyledSocialContainer } from "./styled";
import appData from "virtual:appData";

const defaultSvgProps = {
  fill: "var(--docit-c-black)",
  width: "1.5em",
  height: "1.5em",
  cursor: "pointer",
};

const Socials = () => {
  if (!appData.socials) {
    return null;
  }

  return (
    <StyledSocialContainer>
      {Object.entries(appData.socials).map(([key, value]) => {
        const Component = Svgs[key];
        return (
          <Component
            {...defaultSvgProps}
            key={key}
            onClick={() => {
              window.open(value, "__blank");
            }}
          />
        );
      })}
    </StyledSocialContainer>
  );
};

export { Socials };
