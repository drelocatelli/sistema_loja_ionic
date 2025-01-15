import { Sale } from "@/types/Sale";
import { defineStore } from "pinia";

export const useSalesStore = defineStore('sales', {
    state: () => ({
        sales: [] as Sale[]
    }),
    actions: {
        setSales(sales: Sale[]) {
            this.sales = sales;
        },
        addSale(sale: Sale) {
            this.sales.push(sale);
        },
        removeSale(sale: Sale) {
            this.sales = this.sales.filter(s => s.id !== sale.id);
        },
        updateSale(sale: Sale) {
            const index = this.sales.findIndex(s => s.id === sale.id);
            if (index !== -1) {
                this.sales[index] = sale;
            }
        },
        clearSales() {
            this.sales = [];
        }
    }
});