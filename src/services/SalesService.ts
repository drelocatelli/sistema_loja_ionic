import StorageFactory from "@/storage";
import { useSalesStore } from "@/store/SalesStore";
import { fetchData, wait } from "@/utils";

class SalesService {

    static async get() {
        const store = useSalesStore();
        try {

            store.setIsLoading(true);

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
                            product {
                                name
                                price
                            }
                            description
                            client {
                                name
                            }
                            colaborator {
                                name
                            }
                            date
                            id
                            total
                            created_at
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
            
            await wait(1000)
            store.setIsLoading(false);

            return response.data.getSales;
            
        } catch(err) {
            store.setError(true)
            console.log(err);
        } 
    }
    
}

export default SalesService;