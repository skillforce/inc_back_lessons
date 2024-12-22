import { Request, Response, Router } from "express";

export const addresses_router = Router({});

let addresses = [
    {value:'Dok 15', id:1},
    {value:'Mira 16', id:2},
]

addresses_router.get('/', (req: Request, res: Response) => {
    res.json(addresses);
});

addresses_router.get('/:addressId', (req: Request, res: Response) => {

    const addressId = req.params.addressId
    const address = addresses.find(address => address.id === +addressId);
    if(!address) {
        res.send(404)
    }

    res.json(address);
});

addresses_router.post('/', (req: Request, res: Response) => {

    console.log(req.body)
    const addressTitle = req.body?.title;

    if(!addressTitle) {
        res.send(400)
    }

    const newAddress = {value:addressTitle, id:+new Date()}

    addresses.push(newAddress)

    res.status(201).json(newAddress);
});

addresses_router.put('/:id', (req: Request, res: Response) => {

    const addressTitle = req.body?.title;
    const addressIdQuery = req.params?.id;

    if(!addressTitle || !addressIdQuery) {
        res.send(400)
    }

    const addressToUpdate = addresses.find(address => address.id === +addressIdQuery);

    if(!addressToUpdate) {
        res.send(404)
    }else {
        const updatedAddress = {...addressToUpdate, value: addressTitle}

        addresses = addresses.map(address => address.id === +addressIdQuery ? updatedAddress : address);


        addresses.push(updatedAddress)

        res.status(200).json(updatedAddress);
    }
});

addresses_router.delete('/:addressId', (req: Request, res: Response) => {

    const addressId = req.params.addressId
    const addressToDelete = addresses.find(address => address.id === +addressId);

    if(!addressToDelete){
        res.send(404)
    }

    addresses = addresses.filter(address => address.id !== +addressId);
    res.status(204);
});
