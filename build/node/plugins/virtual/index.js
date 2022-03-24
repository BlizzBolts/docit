import Virtual, { updateVirtualModule, } from "vite-plugin-virtual";
// @ts-ignore
const viteVirtual = Virtual["default"];
export * from "./provider.js";
export const withVirtual = async (id, contentGenerator) => {
    const plugin = viteVirtual({
        [id]: await contentGenerator(),
    });
    const update = async () => {
        return updateVirtualModule(plugin, id, await contentGenerator());
    };
    return [plugin, update];
};
//# sourceMappingURL=index.js.map