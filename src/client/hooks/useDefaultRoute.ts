import { matchPath, useLocation, useMatch, useNavigate } from "react-router";
import { routes } from "virtual:routes";
import sidebars from "virtual:sidebars";
import { isEmpty } from "lodash-es";
import { useEffect } from "react";

console.log(routes)
const findFirstRoute = () => {
  const find = (data: SidebarNode[]) => {
    for (let i = 0; i < data.length; i++) {
      const curr = data[i];
      if (isEmpty(curr.children)) {
        return curr?.path;
      } else {
        return curr?.children?.[0]?.path;
      }
    }
  };

  return find(sidebars);
};

export const useDefaultRoute = () => {
  const match = useMatch("/");
  const navigate = useNavigate();

  useEffect(() => {
    if (match) {
      if (match.pathname === "/") {
        navigate(
          {
            pathname: findFirstRoute() || "/index",
          },
          {
            replace: true,
          }
        );
      }
    }
  }, [match]);
};
