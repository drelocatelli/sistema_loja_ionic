import { Storage } from "@ionic/storage";

class StorageFactory {

    public storage: Storage = new Storage();

    constructor() {
        this.createStorage();
    }

    private async createStorage() {
        await this.storage.create();
    }

    public async setData(key: string, value: any) {
        await this.storage.set(key, value);
    }

    public async getData(key: string) {
        return await this.storage.get(key);
    }

    public async getToken() {
        return this.getData('token');
    }
}

export default StorageFactory;