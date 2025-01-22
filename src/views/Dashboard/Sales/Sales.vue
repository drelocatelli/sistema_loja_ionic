<template>
    <ion-page>
        <default-dashboard-page 
            title="Vendas"
            right-btn-title="Nova venda"
            :right-btn-fn="novaVenda"
            :items="data"
            :is-loading="salesStore.getIsLoading()"
            :has-modal="true"
            modal-title="Nova venda"
        >
            <template #modal-content>
                <div style="padding: 1rem">
                    <ion-input label="N° série:" placeholder="Digite o número de série" />
                    <ion-input label="Descrição:" placeholder="Opcional" />
                    <ion-select label="Produto:" label-placement="fixed" placeholder="Selecione o produto">
                        <ion-select-option value="">Aguarde...</ion-select-option>
                    </ion-select>
                    <ion-select label="Responsável:" label-placement="fixed" placeholder="Selecione o responsável">
                        <ion-select-option value="apple">Apple</ion-select-option>
                        <ion-select-option value="banana">Banana</ion-select-option>
                        <ion-select-option value="orange">Orange</ion-select-option>
                    </ion-select>
                    <ion-select label="Cliente:" label-placement="fixed" placeholder="Selecione o cliente">
                        <ion-select-option value="apple">Apple</ion-select-option>
                        <ion-select-option value="banana">Banana</ion-select-option>
                        <ion-select-option value="orange">Orange</ion-select-option>
                    </ion-select>
                    <ion-input type="number" label="Quantidade:" placeholder="Digite a unidade" />
                </div>

            </template>
        </default-dashboard-page>
        
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import SalesService from '@/services/SalesService';
import { useSalesStore } from '@/store/SalesStore';
import { storeToRefs } from 'pinia';
import { Sale } from '@/types/Sale';
import {mapSales} from '@/types/Sale.map.js'

const isModalOpen = ref(false);

const salesStore = useSalesStore();

const data = ref<Sale[]>([]);

const {sales, pagination } = storeToRefs(salesStore);

function novaVenda() {
    isModalOpen.value = true;
}

onMounted(async () => {
    await SalesService.get();
    data.value = mapSales(sales);
})


</script>


<style lang="scss">

</style>