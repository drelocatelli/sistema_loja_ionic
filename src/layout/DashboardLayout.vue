<template>
    <div id="dashboard-wrapper">
        <ion-menu content-id="main-content" class="custom-menu">
            <!-- <ion-header>
                <ion-toolbar>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header> -->
            <ion-content class="ion-padding">
                <menu-component class="mobile" />
            </ion-content>
        </ion-menu>
        <ion-page id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-menu-button></ion-menu-button>
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
                <ion-router-outlet></ion-router-outlet>
            </ion-content>
        </ion-page>

    </div>
</template>

<script lang="ts" setup>
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonMenuButton, IonContent, IonImg,IonRouterOutlet } from '@ionic/vue';
import MenuComponent from '@/components/Menu.vue';

</script>

<style lang="scss">
#dashboard-wrapper {
    --ion-background-color: var(--ion-background);
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