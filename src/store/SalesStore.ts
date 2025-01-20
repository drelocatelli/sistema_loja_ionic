import Pagination from "@/types/Pagination";
import { Sale } from "@/types/Sale";
import { defineStore } from "pinia";

export const useSalesStore = defineStore('sales', {
    state: () => ({
        sales: [] as Sale[],
        pagination: {} as Pagination,
        isLoading: false as boolean,
        error: false as boolean
    }),
    actions: {
        getSales() {
            return this.sales;
        },
        setSales(sales: Sale[]) {
            this.sales = sales;
        },
        deleteSales(sales: Sale[]) {
            this.sales = this.sales.filter(s => !sales.includes(s));
        },
        updateSales(sales: Sale[]) {
            const foundSales = this.sales.filter(s => sales.includes(s));

            foundSales.forEach(sale => {
                const index = this.sales.indexOf(sale);
                this.sales[index] = sale;
            });
        },
        clearSales() {
            this.sales = [];
        },

        getPagination() {
            return this.pagination;
        },
        setPagination(pagination: Pagination) {
            this.pagination = pagination;
        },
        setIsLoading(isLoading: boolean) {
            this.isLoading = isLoading;
        },
        getIsLoading() {
            return this.isLoading;
        },
        setError(error: boolean) {
            this.error = error;
        },
        getError() {
            return this.error;
        }
    }
});