import { Plugin } from "vite";
import Virtual, {
  updateVirtualModule,
  VirtualModule,
} from "vite-plugin-virtual";
// @ts-ignore
const viteVirtual = Virtual["default"];

export * from "./provider.js";

export type VirtualUpdater = () => Promise<void>;

export const withVirtual = async (
  id: string,
  contentGenerator: () => Promise<VirtualModule>
): Promise<[Plugin, VirtualUpdater]> => {
  const plugin: Plugin = viteVirtual({
    [id]: await contentGenerator(),
  });
  const update = async () => {
    return updateVirtualModule(plugin, id, await contentGenerator());
  };

  return [plugin, update];
};
