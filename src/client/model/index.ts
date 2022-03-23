import { entity } from 'simpler-state';

export const sidebarVisible = entity(false);

export const setSidebarVisible = (v: boolean) => {
  sidebarVisible.set(v);
};
