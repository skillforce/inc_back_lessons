import { Request, Response, Router } from "express";
import { products_repository } from "../repositories/products-repository";



export const products_router= Router({});

products_router.get('/', (req: Request, res: Response) => {
    const productTitleQuery = req.query.title
    const productsResult = products_repository.findProducts(productTitleQuery?.toString())
    res.json(productsResult);
});

products_router.get('/:productTitle', (req: Request, res: Response) => {
    const productTitle = req.params.productTitle;
    const product = products_repository.getProductByTitle(productTitle);

    if(!product) {
        res.send(404)
    }

    res.json(product);
});
