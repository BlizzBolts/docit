import { entity } from 'simpler-state';
export const sidebarVisible = entity(false);
export const setSidebarVisible = (v) => {
    sidebarVisible.set(v);
};
//# sourceMappingURL=index.js.map