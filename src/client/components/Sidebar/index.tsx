import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from 'react-pro-sidebar';
import sidebars from 'virtual:sidebars';
import 'react-pro-sidebar/dist/scss/styles.scss';
import { sidebarVisible, setSidebarVisible } from '../../model';

export interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const location = useLocation();
  const { className } = props;
  const visible = sidebarVisible.use();

  const parse = (item: any, level = 0) => {
    if (!item.children) {
      return (
        <MenuItem
          key={item.path}
          active={item.path === location.pathname}
          onClick={() => {
            setSidebarVisible(false);
          }}
        >
          {item.title}
          <Link to={item.path} />
        </MenuItem>
      );
    } else {
      return (
        <SubMenu key={item.title} title={item.title} defaultOpen>
          {item.children.map((o: any) => {
            return parse(o, level + 1);
          })}
        </SubMenu>
      );
    }
  };
  return (
    <ProSidebar
      breakPoint="md"
      toggled={visible}
      onToggle={(v) => {
        setSidebarVisible(v);
      }}
      className={className}
      width="20em"
      collapsedWidth="0px"
    >
      <SidebarContent>
        <Menu>{sidebars.map((o: any) => parse(o))}</Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export { Sidebar };
