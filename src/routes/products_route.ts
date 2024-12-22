import { Request, Response, Router } from "express";

let products = [
    {title: 'tomato'}, {title: 'oranges'}
];

export const products_router= Router({});

products_router.get('/products', (req: Request, res: Response) => {
    const productTitleQuery = req.query.title

    if(!productTitleQuery) {
        res.send(products)
    }
    const productsResult = products.filter(product=>product.title.includes(productTitleQuery?.toString()||''))
    if(!productsResult.length) {
        res.send(404)
    }
    res.json(productsResult);
});

products_router.get('/products/:productTitle', (req: Request, res: Response) => {
    const productTitle = req.params.productTitle
    const product = products.find(product => product.title === productTitle)
    if(!product) {
        res.send(404)
    }

    res.json(product);
});
