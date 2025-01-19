import StorageFactory from "@/storage";
import { useSalesStore } from "@/store/SalesStore";
import { fetchData } from "@/utils";

class SalesService {

    static async get() {
        try {
            const store = useSalesStore();


            const query = `
                query GetSales {
                    getSales {
                        pagination {
                            totalRecords
                            totalPages
                            currentPage
                            pageSize
                        }
                        sales {
                            serial
                            client {
                                name
                            }
                            colaborator {
                                name
                            }
                            id
                            total
                            product {
                                name
                                price
                            }
                            description
                            created_at
                            date
                        }
                    }
                }
            `;

            const storage = new StorageFactory();

            const response = await fetchData({
                endpoint: `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`,
                method: 'POST',
                otherOptions: {
                    data: {
                        query
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${await storage.getToken()}`
                    }
                },
            });

            store.setSales(response.data.getSales.sales);
            store.setPagination(response.data.getSales.pagination);

            return response.data.getSales;

        } catch(err) {
            console.log(err);
        }
    }
    
}

export default SalesService;