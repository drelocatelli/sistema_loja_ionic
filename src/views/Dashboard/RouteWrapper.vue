<template>
    <ion-app>
        <ion-menu content-id="main-content" menu-id="main-menu" class="custom-menu" side="start">
            <ion-content class="ion-padding">
                <menu-component class="mobile" />
            </ion-content>
        </ion-menu>
        <ion-router-outlet :animated="false" id="main-content"/>
    </ion-app>
</template>

<script lang="ts" setup>
import { IonRouterOutlet, IonMenu, IonContent, IonApp, menuController } from '@ionic/vue';
import MenuComponent from '@/components/Menu.vue';
import router from '@/router';

router.beforeEach((to, from, next) => {
    menuController.close();
    next()
})


</script>