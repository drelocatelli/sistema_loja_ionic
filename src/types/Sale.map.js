/**
 * Maps an array of sales to an array of objects with values filtered by tileKey, 
 * and also flattens objects in the array.
 * 
 * @param {Object} sales - Object containing the array of sales in the 'value' property.
 * @param {Array} tileKey - Array of strings used to filter the sales and create a new object.
 * 
 * @returns {Array} - An array of objects with values filtered by tileKey.
 */
function mapSales(sales) {

    const titleKey = [
        {
            title: 'N° série',
            key: 'serial'
        },
        {
            title: 'Produto',
            key: 'product'
        },
        {
            title: 'Descrição',
            key: 'description'
        },
        {
            title: 'Cliente',
            key: 'client'
        },
        {
            title: 'Vendedor',
            key: 'colaborator'
        },
        {
            title: 'Data',
            key: 'date'
        },
        {
            title: 'Preço',
            key: 'price',
            prefix: 'R$'
        },
        {
            title: 'Quantidade',
            key: 'total',
            sufix: 'unidades'
        },
    ];
    // get values and name values of array
    const values = sales.value.map((sale) => {
        if(sale?.client?.name) {
            sale.client =  sale.client.name;
        }
        if(sale?.colaborator?.name) {
            sale.colaborator =  sale.colaborator.name;
        }
        if(sale.product?.price) {
            sale.price =  sale.product.price;
        }

        if(sale.product?.name) {
            sale.product =  sale.product.name;
        }
        return sale;
    })

    // filter values to make title as key and value as value
    const filterValues = values.map((item) => {
        const entries = titleKey.map((header) => {
            //prefix 
            header.value = header.prefix
                ? `${header.prefix} ${item[header.key]}`
                : item[header.key];
            // sufix
            header.value = header.sufix ? 
                `${header.value} ${header.sufix}` : 
                header.value;
            const {title} = header;
            const {value} = header;
            
            return [title, value]
        });

        return Object.fromEntries(new Map(entries))
    })

    return filterValues;
}


export {mapSales}