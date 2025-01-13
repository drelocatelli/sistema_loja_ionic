<template>
    <ion-page>
        <div id="bg">
            <form @submit.prevent="handleSubmit">
                <div id="main">
                    <div>
                        <v-text-field name="password" label="Senha" type="password" class="w-100" variant="solo"></v-text-field>
                    </div>
                    <div>
                        <v-btn type="submit" :elevated="false" color="deep-orange-darken-1" :disabled="isLoading">
                            <span v-if="!isLoading">Entrar</span>
                            <ion-spinner name="dots" v-else></ion-spinner>
                        </v-btn>
                    </div>
                </div>
            </form>
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
import { IonPage } from '@ionic/vue';
import { VBtn, VTextField } from 'vuetify/lib/components/index.mjs';
import axiosInstance from '@/fetchIntance';
import { ref } from 'vue';
import wait from '@/utils';

const isLoading = ref(false);
const isLoginError = ref(false);
const loginErrorMessage = ref('');

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
        
    } catch (error) {
        isLoginError.value = true;
        console.error(error);
        loginErrorMessage.value = error.message;
    } 
    isLoading.value = false;
}
</script>

<style lang="scss" scoped>
#bg {
    background: gray;
}
#main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100vh;
    width: 80vw;

    :deep(input) {
        padding-top: 0;
        padding-bottom: 0;
    }

    @media screen and (min-width: 800px) {
            width: 30vw;
    }
    
}

</style>