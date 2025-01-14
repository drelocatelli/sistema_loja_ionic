<template>
    <ion-page>
        <dashboard-layout page-title="Vendas">
            <template #actions>
                <div class="right-sidebar">
                    <div class="mb-3">
                        <v-btn variant="elevated" class="btn-orange">Adicionar venda</v-btn>
                    </div>
                    <div class="search-bar">
                        <v-text-field label="Pesquisar" variant="outlined"></v-text-field>
                    </div>
                </div>
            </template>
            sales
        </dashboard-layout>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { VBtn, VTextField } from 'vuetify/lib/components/index.mjs';
</script>

<style lang="scss" scoped>
.right-sidebar {
    display: flex;
    align-items: flex-end!important;
    flex-direction: column;

    & .search-bar {
        width: 25vw;

        @media screen and (max-width: 750px) {
            width: 90vw;
        }
    }

}

</style>