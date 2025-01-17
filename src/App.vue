<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
  <div id="dialog-bg"  @click="dialogStore.closeDialog()" v-if="dialogStore.isOpen">
  </div>
  <div id="dialog-wrapper" :style="{display: dialogStore.isOpen ? 'flex' : 'none'}">
    <v-card :title="dialogStore.title" class="positioned-dialog" :style="{width: dialogStore.width}">
        <v-card-text>
          <template v-if="dialogStore.body != null">
            <component :is="dialogStore.body"></component>
          </template>
        </v-card-text>
  
        <v-card-actions>
          <v-spacer></v-spacer>
            <component  v-if="dialogStore.actions != null" :is="dialogStore.actions"></component>
            <v-btn
            v-else
              text="Fechar"
              @click="dialogStore.closeDialog()"
            ></v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { VCard, VCardText, VCardActions, VBtn, VSpacer } from 'vuetify/lib/components/index.mjs';
import { useDialogStore } from './store/DialogStore';

const dialogStore = useDialogStore();

console.log('body', dialogStore.body);

</script>

<style langs="scss">

#dialog-bg {
  background-color: rgba(19, 18, 18, 0.397);
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#dialog-wrapper {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  pointer-events: none;

  & .v-card-actions {
    justify-content: flex-end;
  }

  & .positioned-dialog {
    pointer-events: all;
  }

  @media screen and (max-width: 800px) {
    & .positioned-dialog {
      width: 80%;
    }
  }
  
}
</style>