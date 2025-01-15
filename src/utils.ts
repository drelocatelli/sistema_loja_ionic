import { Capacitor, CapacitorHttp } from "@capacitor/core";

function wait(miliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}

interface FetchOptions {
    endpoint: string,
    otherOptions?: any,
    method: string
}

async function fetchData(options: FetchOptions) {
    const isWeb = Capacitor.getPlatform() === 'web';

    if (isWeb) {
        
        const response = await fetch(options.endpoint, {
            ...options.otherOptions,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            method: options.method
        });

        return await response.json();

    } else {
        const response = await CapacitorHttp.request({
            url: options.endpoint,
            method: options.method,
            ...options.otherOptions
        });

        return response.data;
    }
}

export {wait, fetchData};