<template>
    <ion-page>
        <default-dashboard-page 
            title="Vendas"
            right-btn-title="Nova venda"
            :right-btn-fn="novaVenda"
            :data-headers="dataHeaders"
            :items="salesStore.getSales()"
        />
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { onMounted } from 'vue';
import SalesService from '@/services/SalesService';
import { useSalesStore } from '@/store/SalesStore';

const salesStore = useSalesStore();

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

onMounted(async () => {
    await SalesService.get();
})


</script>

