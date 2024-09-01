declare module '@magento/venia-ui/*';
declare module '@magento/venia-ui/lib/classify' {
    import classify, { mergeClasses, useStyle } from '../types/magento__venia-ui/lib/classify'; // Ajuste o caminho conforme necessário

    export default classify;
    export { mergeClasses, useStyle };
}

declare module '@magento/peregrine/*';
declare module '@magento/peregrine';
declare module '@magento/pwa-theme-venia';

interface NetworkInformation {
    effectiveType: string;
    downlinkMax?: number;
    rtt?: number;
    saveData?: boolean;
}

interface Navigator {
    connection?: NetworkInformation;
}


