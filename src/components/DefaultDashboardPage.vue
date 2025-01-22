<template>
    <dashboard-layout :page-title="props.title">
        <template #actions>
            <div class="right-sidebar mt-5">
                <div class="search-bar">
                    <ion-searchbar placeholder="Pesquisar" show-clear-button="always" />
                </div>
                <div class="mb-3 mr-2">
                    <v-btn variant="tonal" class="btn-orange" @click="props.hasModal ? openModal() : props.rightBtnFn">{{ props.rightBtnTitle }}</v-btn>
                </div>
            </div>
        </template>
        <div id="main-content-wrapper">
            <div class="container">
                <v-data-table 
                    items-per-page-text="Itens por página"
                    no-data-text="Nada encontrado"
                    :items="props.items"
                    :loading="props.isLoading"
                >
                    <template v-slot:loading>
                        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
                    </template>
                </v-data-table>
            </div>
        </div>
    </dashboard-layout>
    <ion-modal ref="modal" :is-open="isModalOpen" class="modal" @willDismiss="closeModal">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button @click="isModalOpen = false">
                        Cancelar
                    </ion-button>
                </ion-buttons>
                <ion-title>
                    <div style="text-align: center;">
                        {{ props.modalTitle }}
                    </div>
                </ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="modalBtnFn && closeModal()">
                        {{ props.modalConfirmTxt }}
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="no-bg" >
            <slot name="modal-content" />
        </ion-content>
    </ion-modal>
</template>

<script setup>
import { VBtn, VDataTable, VSkeletonLoader } from 'vuetify/lib/components/index.mjs';
import { IonSearchbar, IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonTitle } from '@ionic/vue';
import { onMounted, ref } from 'vue';

const isModalOpen = ref(false);

function openModal() {
    isModalOpen.value = true;
}

function closeModal() {
    isModalOpen.value = false;
}

const props = defineProps({
    title: {
        type: String,
        default: 'Título da página'
    },
    hasModal: {
        type: Boolean,
        default: false
    },
    modalTitle: {
        type: String,
        default: 'Título do modal'
    },
    modalConfirmTxt: {
        type: String,
        default: 'Confirmar'
    },
    modalBtnFn: {
        type: Function,
        default: () => {}
    },
    rightBtnTitle: {
        type: String,
        default: 'Botão da direita'
    },
    rightBtnFn: {
        type: Function,
        default: () => {}
    },
    dataHeaders: {
        type: Array,
        default: () => []
    },
    items: {
        type: Array,
        default: () => []
    },
    isLoading: {
        type: Boolean,
        default: false
    }
});

onMounted(() => {
    console.log(props.items)
})

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

/* #main-content-wrapper {
    height: 80%;
    overflow: hidden;

    & .container {
        padding: 1.8rem 2rem;
        overflow: auto;
        height: 100%;
        width: 100%;
        left: 0;
        background-color: #ffffffb2;
        border-radius: 5px;
    }
} */

</style>