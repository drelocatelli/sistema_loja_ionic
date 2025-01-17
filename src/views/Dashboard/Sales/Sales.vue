<template>
    <ion-page>
        <default-dashboard-page 
            title="Vendas"
            right-btn-title="Nova venda"
            :right-btn-fn="novaVenda"
            :data-headers="dataHeaders"
            :items="data"
        />
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import DefaultDashboardPage from '@/components/DefaultDashboardPage.vue';
import { onMounted, ref } from 'vue';
import SalesService from '@/services/SalesService';

const data = ref([]);
function novaVenda() {
    window.alert('opa')
}

const dataHeaders = [
    {
        title: 'N° série',
    },
    {
        title: 'Produto',
    },
    {
        title: 'Descrição',
    },
    {
        title: 'Cliente'
    },
    {
        title: 'Vendedor'
    },
    {
        title: 'Data'
    },
    {
        title: 'Preço'
    },
    {
        title: 'Quantidade'
    },
    {
        title: 'Total'
    },
];

async function fetch() {
    await SalesService.get();
}

onMounted(async () => {
    await fetch();
})


</script>

