<template>
    <ion-page>
        <div id="bg">
            <div id="main">
                <div class="container">
                    <form @submit.prevent="handleSubmit">
                        <div id="main">
                            <h1 style="margin-bottom: 1rem; text-align: center; display: flex; justify-content: center;">Painel RacconTech</h1>
                            <div style="margin-bottom: 2rem; text-align: center; display: flex; justify-content: center;">
                                <ion-img src="logo.png" style="width: 100px"></ion-img>
                            </div>
                            <div>
                                <v-text-field name="password" label="Senha" type="password" class="w-100" variant="outlined"></v-text-field>
                            </div>
                            <div>
                                <v-btn  type="submit" :elevated="false" color="orange-darken-2" :disabled="isLoading" style="display: flex; justify-content: flex-end; width: -webkit-fill-available; padding: 5px 1rem;">
                                    <div v-if="!isLoading">
                                        <span >Continuar</span>
                                        <v-icon icon="mdi-arrow-right" style="margin-left: 6px;"></v-icon>
                                    </div>
                                    <ion-spinner name="dots" v-else></ion-spinner>
                                </v-btn>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            <ion-alert
                :is-open="isLoginError"
                @did-dismiss="isLoginError = false"
                header="Ocorreu um erro"
                :message="loginErrorMessage"
                :buttons="['Fechar']"
             />
        </div>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonImg } from '@ionic/vue';
import { VBtn, VTextField, VIcon } from 'vuetify/lib/components/index.mjs';
import axiosInstance from '@/fetchIntance';
import { ref } from 'vue';
import wait from '@/utils';
import { useRouter } from 'vue-router';

const isLoading = ref(false);
const isLoginError = ref(false);
const loginErrorMessage = ref('');

const router = useRouter();

async function handleSubmit(event: Event) {
    const {target} = event;
    const formData = new FormData(target as HTMLFormElement);
    const data = Object.fromEntries(formData as any) as {password: string};
    await login(data.password);
}

    /**
     * Send a POST request to the login endpoint.
     * @param {string} password the password to send in the request
     * @throws {Error} if the response is not ok
     */
async function login(password: string) {
    isLoading.value = true;
    isLoginError.value = false;
    try {
        const query = `
            mutation Login {
                login(password: "${password}") {
                    error
                    message
                    token
                }
            }
        `;
        const response = await axiosInstance.post('', {
            query,
        });
        await wait(1000);

        if(response.data.data.login.error) {
            throw new Error(response.data.data.login.message);
        }

        router.push('/dashboard');
        
    } catch (error) {
        isLoginError.value = true;
        console.error(error);
        loginErrorMessage.value = (error as Error).message;
    } 
    isLoading.value = false;
}
</script>

<style lang="scss" scoped>
#bg {
    background: url('bg-render.jpg') no-repeat center center / cover;
    display: flex;
    height: 100vh;
    color: #FF6600;
}
#main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    width: 80vw;

    & > div {
        width: 100%;
    }

    & .container {
        background-color: #fff;
        padding: 1rem;
        border-radius: 10px;
    }

    @media screen and (min-width: 800px) {
        width: 30vw;
    }
    
}

</style>