export declare const MESSAGE_TYPES: {
    PREFETCH_IMAGES: string;
};

export declare const VALID_SERVICE_WORKER_ENVIRONMENT: boolean;

export declare const registerMessageHandler: (type: string, handler: (payload: object, event: MessageEvent) => void) => () => void;

export declare const unRegisterMessageHandler: (type: string, handler: (payload: object, event: MessageEvent) => void) => void;

export declare const handleMessageFromSW: (type: string, payload: object, event: MessageEvent) => void;

export declare const sendMessageToSW: (type: string, payload: object) => Promise<any>;
