let products = [
    {title: 'tomato', id:1}, {title: 'oranges',id:2}
];

export const products_repository = {
    findProducts(productTitleQuery?: string) {
        if (productTitleQuery) {
            return products.filter(product => product.title.includes(productTitleQuery))
        } else {
            return products;
        }
    },
    getProductByTitle(productTitle: string) {
        const productsResult = products.find(product => product.title.includes(productTitle));
        if (!productsResult) {
            return null;
        }
        return productsResult
    },

};