import { matchPath, useHistory, useLocation } from 'react-router';
import { routes } from 'virtual:routes';
import sidebars from 'virtual:sidebars';
import { isEmpty } from 'lodash-es';
export const useDefaultRoute = () => {
    const findFirstRoute = () => {
        const find = (data) => {
            for (let i = 0; i < data.length; i++) {
                const curr = data[i];
                if (isEmpty(curr.children)) {
                    return curr?.path;
                }
                else {
                    return curr?.children?.[0]?.path;
                }
            }
        };
        return find(sidebars);
    };
    const history = useHistory();
    const location = useLocation();
    const result = matchPath(location.pathname, routes.map((o) => o.path));
    if (result.path === '*' && location.pathname === '/') {
        history.push(findFirstRoute() || '/index');
    }
};
//# sourceMappingURL=useDefaultRoute.js.map