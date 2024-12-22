import { Request, Response, Router } from "express";


export const main_router=Router({});

main_router.get('/', (req: Request, res: Response) => {
    res.send('Hello Deniska!!!  It\'s IT_INCUBATOR_LESSONS!!!');
});