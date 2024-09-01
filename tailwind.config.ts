import type { Config } from 'tailwindcss';
import venia from '@magento/pwa-theme-venia';

const matcher = /(?<=composes:.*)(\S+)(?=.*from global;)/g;

const config: Config = {
    mode: 'jit',
    // @ts-ignore
    presets: [venia],
    content: {
        files: [
            './node_modules/@magento/venia-ui/lib/**/*.module.css',
            '../venia-ui/lib/**/*.module.css',
            './src/**/*.module.css',
            './template.html'
        ],
        extract: {
            css: content => content.match(matcher) || []
        }
    },
    separator: '_',
    theme: {
        extend: {}
    }
};

export default config;
