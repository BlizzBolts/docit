import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, } from 'react-pro-sidebar';
import sidebars from 'virtual:sidebars';
import 'react-pro-sidebar/dist/scss/styles.scss';
import { sidebarVisible, setSidebarVisible } from '../../model';
const Sidebar = (props) => {
    const location = useLocation();
    const { className } = props;
    const visible = sidebarVisible.use();
    const parse = (item, level = 0) => {
        if (!item.children) {
            return (React.createElement(MenuItem, { key: item.path, active: item.path === location.pathname, onClick: () => {
                    setSidebarVisible(false);
                } },
                item.title,
                React.createElement(Link, { to: item.path })));
        }
        else {
            return (React.createElement(SubMenu, { key: item.title, title: item.title, defaultOpen: true }, item.children.map((o) => {
                return parse(o, level + 1);
            })));
        }
    };
    return (React.createElement(ProSidebar, { breakPoint: "md", toggled: visible, onToggle: (v) => {
            setSidebarVisible(v);
        }, className: className, width: "20em", collapsedWidth: "0px" },
        React.createElement(SidebarContent, null,
            React.createElement(Menu, null, sidebars.map((o) => parse(o))))));
};
export { Sidebar };
//# sourceMappingURL=index.js.map