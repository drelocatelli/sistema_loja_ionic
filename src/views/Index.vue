<template>
    <ion-page>
        <ion-content>
        <div id="main-wrapper">
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
                                    <ion-spinner color="light" name="dots" v-else></ion-spinner>
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
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonImg, IonContent } from '@ionic/vue';
import { VBtn, VTextField, VIcon } from 'vuetify/lib/components/index.mjs';
import { ref } from 'vue';
import wait from '@/utils';
import { useRouter } from 'vue-router';
import { CapacitorHttp } from '@capacitor/core';

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
            mutation Login($password: String!) {
                login(password: $password) {
                    error
                    message
                    token
                }
            }
        `;

        const response = await CapacitorHttp.post({
            url: import.meta.env.VITE_API_URL,
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
ion-content {
    --background: url('bg-render.png') no-repeat center center / cover;
    height: 100vh;
}
#main-wrapper {
    display: flex;
    color: var(--ion-color-primary);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
}
#main {
    margin: 0 auto;
    background-color: #fff;
    width: 80vw;
    padding: 1rem;
    border-radius: 10px;


    & > div {
        width: 100%;
    }

    @media screen and (min-width: 800px) {
        width: 30vw;
    }
    
}

</style>