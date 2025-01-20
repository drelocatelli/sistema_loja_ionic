<template>
    <ion-page>
        <default-dashboard-page 
            title="Vendas"
            right-btn-title="Nova venda"
            :right-btn-fn="novaVenda"
            :items="data"
            :is-loading="salesStore.getIsLoading()"
        />
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import SalesService from '@/services/SalesService';
import { useSalesStore } from '@/store/SalesStore';
import { storeToRefs } from 'pinia';
import { Sale } from '@/types/Sale';
import {mapSales} from '@/types/Sale.map.js'

const salesStore = useSalesStore();

const data = ref<Sale[]>([]);

const {sales, pagination } = storeToRefs(salesStore);

function novaVenda() {
    window.alert('opa')
}

onMounted(async () => {
    await SalesService.get();
    data.value = mapSales(sales);
})


</script>

