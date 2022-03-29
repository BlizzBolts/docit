import React from "react";
import { Link, useLocation } from "react-router-dom";
import { isEmpty } from "lodash-es";
import sidebars from "virtual:sidebars";
import { StyledSidebarItem } from "./styled";
import { setSidebarVisible } from "../../model";

const Sidebar: React.FC<Overrides> = (props) => {
  const location = useLocation();
  const parse = (o: SidebarNode, level?: number) => {
    if (isEmpty(o.children)) {
      return (
        <StyledSidebarItem
          key={o.path}
          level={level}
          active={o.path === location.pathname}
        >
          <Link
            to={o.path}
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

  return <aside {...props}>{sidebars.map((o) => parse(o, 0))}</aside>;
};

export { Sidebar };
