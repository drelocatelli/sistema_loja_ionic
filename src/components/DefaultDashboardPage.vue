<template>
    <dashboard-layout :page-title="props.title">
        <template #actions>
            <div class="right-sidebar mt-5">
                <div class="search-bar">
                    <ion-searchbar placeholder="Pesquisar" show-clear-button="always" />
                </div>
                <div class="mb-3 mr-2">
                    <v-btn variant="tonal" class="btn-orange" @click="props.rightBtnFn">{{ props.rightBtnTitle }}</v-btn>
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
</template>

<script setup>
import { VBtn, VDataTable, VSkeletonLoader } from 'vuetify/lib/components/index.mjs';
import { IonSearchbar } from '@ionic/vue';
import { onMounted } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Título da página'
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