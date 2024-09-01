module.exports = api => {
    const presets = ['@magento/peregrine', '@babel/preset-typescript'];
    const plugins = api.env('development') ? ['react-refresh/babel'] : [];

    return { presets, plugins };
};
