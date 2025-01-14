<template>
    <div id="dashboard-wrapper">
        <ion-page id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-menu-button ></ion-menu-button>
                    </ion-buttons>
                    <ion-title>
                        <div class="header-wrapper">
                            <div class="d-flex align-center ga-4">
                                <div>
                                    <ion-img src="logo.png" style="width: 40px; height: auto;" />
                                </div>
                                <div>
                                    Painel RaccoonTech
                                </div>
                            </div>
                            <menu-component class="hide_mobile" />
                        </div>
                    </ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <div class="main-content flex-wrap d-flex justify-space-between align-center">
                    <h1>{{props.pageTitle ?? 'Título da página'}}</h1>
                    <div>
                        <slot name="actions" />
                    </div>
                </div>
                <slot />
            </ion-content>
        </ion-page>
    </div>
</template>

<script lang="ts" setup>
import { IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonMenuButton, IonContent, IonImg, menuController } from '@ionic/vue';
import MenuComponent from '@/components/Menu.vue';
import { onMounted } from 'vue';

const props = defineProps({
    pageTitle: String
})

onMounted(() => {
    menuController.enable(true, 'main-menu');
})


</script>

<style lang="scss">
ion-content {
    --background: url('bg-render.png') no-repeat center center / cover;
}
#dashboard-wrapper {
    /* --ion-background-color: var(--ion-background); */
    /* --ion-background: red; */
    --ion-toolbar-background: var(--ion-color-secondary);
    --ion-toolbar-color: var(--ion-light-color);
    --ion-toolbar-font-size: 12px;

    & ion-title {
        color: var(--ion-color-primary);
        font-size: 16px;

        & .header-wrapper {
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
        }

        @media screen and (min-width: 768px) {
            & .header-wrapper {
                justify-content: space-between;
                padding: 0 1.5rem;
            }
        }
    }

    @media screen and (min-width: 768px) {
        & ion-menu-button {
            display: none;
        }
    }
}
</style>