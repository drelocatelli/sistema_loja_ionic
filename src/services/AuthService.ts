import StorageFactory from "@/storage";
import { wait } from "@/utils";
import { CapacitorHttp } from "@capacitor/core";

class AuthService {

    /**
     * Login using the given password.
     * @param password The password to use for the login.
     * @throws {Error} If the login fails.
     */
    static async login(password: string) {
        try {
            const query = `
                mutation Login($password: String!) {
                    login(password: $password) {
                        error
                        message
                        token
                    }
                }
            `;
        
            const response = await CapacitorHttp.post({
                url: `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    query,
                    variables: { password },
                },
            });

            await wait(800);

            if (response.data.data.login.error) {
                throw new Error(response.data.data.login.message);
            }

            const storage = new StorageFactory();
            storage.setData('token', response.data.data.login.token);

        } catch(err: any) {
            throw new Error(err?.message ?? 'Ocorreu um erro inesperado');
        }
        
    }
}

export default AuthService;