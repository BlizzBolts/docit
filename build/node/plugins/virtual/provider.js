const virtualProvider = async (config) => {
    return Promise.resolve({
        name: 'virtual:vite-plugin-virtual/virtual:provider',
        resolveId(id) {
            if (id === 'virtual:provider') {
                return config.providerPath;
            }
        },
    });
};
export { virtualProvider };
//# sourceMappingURL=provider.js.map