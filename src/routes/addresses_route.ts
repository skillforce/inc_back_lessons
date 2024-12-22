import { Request, Response, Router } from "express";
import { addresses_repository } from "../repositories/addresses_repository";

export const addresses_router = Router({});


addresses_router.get('/', (req: Request, res: Response) => {
    const titleQuery = req.query.address
    const filteredProducts = addresses_repository.findAddresses(titleQuery?.toString())
    res.send(filteredProducts)
});

addresses_router.get('/:addressId', (req: Request, res: Response) => {

    const addressId = req.params.addressId
    if(!addressId){
        res.send(400)
    }
    const address = addresses_repository.getAddressById(+addressId);

    if (!address) {
        res.send(404)
    }

    res.json(address);
});

addresses_router.post('/', (req: Request, res: Response) => {
    const addressTitle = req.body?.title;

    if (!addressTitle) {
        res.send(400)
    }

    const newAddress = addresses_repository.createAddress(addressTitle)

    res.status(201).json(newAddress);
});

addresses_router.put('/:id', (req: Request, res: Response) => {
    const addressTitle = req.body?.title;
    const addressIdQuery = req.params?.id;

    const isUpdated = addresses_repository.updateAddress(+addressIdQuery, addressTitle)

    if (!isUpdated) {
        res.send(404)
    }

   const updatedAddress = addresses_repository.getAddressById(+addressIdQuery)
   res.status(200).json(updatedAddress);

});

addresses_router.delete('/:addressId', (req: Request, res: Response) => {
    const addressId = req.params.addressId
    const isDeleted = addresses_repository.deleteAddress(+addressId)
    if (!isDeleted) {
        res.send(404)
    }
    res.sendStatus(204);
});
