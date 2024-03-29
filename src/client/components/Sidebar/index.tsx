import React from "react";
import { Link, useLocation } from "react-router-dom";
import { isEmpty } from "lodash-es";
import sidebars from "virtual:sidebars";
import { routes } from "virtual:routes";

import { StyledSidebarItem, StyledAside } from "./styled";
import { setSidebarVisible, sidebarVisible } from "../../model";

const Sidebar: React.FC = () => {
  const visible = sidebarVisible.use();
  const location = useLocation();
  const parse = (o: SidebarNode, level?: number) => {
    if (isEmpty(o.children)) {
      return (
        <StyledSidebarItem
          key={o.path}
          level={level}
          active={
            encodeURI(decodeURI(o.path)) ===
            encodeURI(decodeURI(location.pathname))
          }
        >
          <Link
            to={encodeURI(o.path)}
            onClick={() => {
              setSidebarVisible(false);
            }}
          >
            {o.title}
          </Link>
        </StyledSidebarItem>
      );
    } else {
      return (
        <StyledSidebarItem level={level} active={false} key={o.title}>
          {o.title}
          <div style={{ marginTop: "16px" }}>
            {o.children.map((o: any) => {
              return parse(o, level + 1);
            })}
          </div>
        </StyledSidebarItem>
      );
    }
  };

  return (
    <StyledAside visible={`${visible}`} className="docit-sidebar">
      {sidebars.map((o) => parse(o, 0))}
    </StyledAside>
  );
};

export { Sidebar };
