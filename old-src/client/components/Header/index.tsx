import React from "react";

import appData from "virtual:appData";
import { setSidebarVisible, sidebarVisible } from "../../model";
import { Socials } from "../Socials";
import { Svgs } from "../Svgs";
import { StyledSidebarBtn, StyledTitle, StyledHeader } from "./styled";

const Header = () => {
  const visible = sidebarVisible.use();
  return (
    <StyledHeader className="docit-header">
      <StyledSidebarBtn
        onClick={() => {
          setSidebarVisible(!visible);
        }}
      >
        <Svgs.ToggleBtn width="1em" height="1em" />
      </StyledSidebarBtn>
      <StyledTitle>{appData.title}</StyledTitle>

      <Socials />
    </StyledHeader>
  );
};

export { Header };
