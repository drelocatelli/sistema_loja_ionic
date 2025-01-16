<template>
    <ion-app>
        <div :style="{display: !hasNewVersion && !isLoading ? 'block' : 'none'}">
            <ion-menu content-id="main-content" menu-id="main-menu" class="custom-menu" side="start">
                <ion-content class="ion-padding">
                    <menu-component class="mobile" />
                </ion-content>
            </ion-menu>
            <ion-router-outlet :animated="false" id="main-content"/>
        </div>
        <div id="main-load" :style="{display: hasNewVersion || isLoading ? 'flex' : 'none'}">
            <div class="load-block">
                <div :style="{display: isLoading ? 'flex' : 'none'}" class="img-logo" style="animation: pulse 1.2s infinite ease-in-out;">
                    <ion-img
                        src="raccoon.png"
                    />
                </div>
            </div>
            <div class="load-block" :style="{display: !isLoading && hasNewVersion ? 'flex' : 'none'}">
                <div class="img-logo">
                    <ion-img
                        src="raccoon.png"
                    />
                </div>
                <h3>Nova versão disponível!</h3>
                <a href="javascript:void(0);" @click="downloadApp()">Atualize aqui</a>
            </div>
        </div>
        <ion-alert
            :is-open="error.length != 0"
            @did-dismiss="error = ''"
            header="Ocorreu um erro"
            :message="error"
            :buttons="alertButtons"
             />
    </ion-app>
</template>

<script lang="ts" setup>
import { IonRouterOutlet, IonMenu, IonContent, IonApp, menuController, IonImg, IonAlert } from '@ionic/vue';
import MenuComponent from '@/components/Menu.vue';
import router from '@/router';
import { onMounted, ref } from 'vue';
import VersionService from '@/services/VersionService';

const isLoading = ref(true);
const hasNewVersion = ref(false);
const error = ref('');

const alertButtons = [
    {
        text: 'Fechar',
        handler: () => {
            window.location.href = '/'
        }
    },
]

function downloadApp() {
    window.open(`${import.meta.env.VITE_API_URL}/raccoon/app.php`, '_system', 'location=yes'); return false;
}

router.beforeEach(async(to, from, next) => {
    menuController.close();
    await checkVersion();
    next()
})

onMounted(async () => {
    await checkVersion();
})

async function checkVersion() {
    const currentVersion = import.meta.env.VITE_APP_VERSION;
    isLoading.value = true;
    try {
        const response = await VersionService.checkVersion();

        hasNewVersion.value = (currentVersion != response.current_version);

    } catch(err) {
        console.log(err);
        error.value = 'Erro ao validar versão';
        // window.location.href = '/'

    } finally {
        isLoading.value = false;
    }
}

</script>

<style lang="scss">
#main-load {
    height: 100vh;
    width: 100%;
    background-color: #fff;
    display: flex; 
    justify-content: center; 
    align-items: center;
    position: fixed;
}

.load-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: grey;
    font-family: 'Inter', sans-serif;

    & ion-img {
        width: 10vw;
        height: auto;

        @media screen and (max-width: 768px) {
            width: 40vw;
        }
    }
}
</style>