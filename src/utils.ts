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

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };

    if(options.otherOptions?.headers) {
        Object.assign(headers, options.otherOptions.headers);
    }


    
    if (isWeb) {
        
        const opt = {
            ...options.otherOptions,
            headers,
            method: options.method,
        };

        if(options.otherOptions?.data) {
            opt.body = JSON.stringify(options.otherOptions.data);
        }
        
        const response = await fetch(options.endpoint, opt);

        return await response.json();

    } else {
        const response = await CapacitorHttp.request({
            url: options.endpoint,
            method: options.method,
            headers,
            ...options.otherOptions
        });

        return response.data;
    }
}

export {wait, fetchData};