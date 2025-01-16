import { fetchData, wait } from "@/utils";

class VersionService {

    static async checkVersion(): Promise<any> {
        try {
            const response = await fetchData({
                endpoint: `${import.meta.env.VITE_API_VERSION_URL}`,
                method: 'GET'
            });
    
            await wait(1000);

            return response;
            
        } catch(err: any) {
            console.log(err);
        }
    }
    
}

export default VersionService