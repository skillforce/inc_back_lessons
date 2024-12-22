import express, { NextFunction,Request,Response } from 'express';
import { addresses_router } from "./routes/addresses_route";
import { products_router } from "./routes/products_route";
import { main_router } from "./routes/main_router";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/',main_router)
app.use('/addresses',addresses_router)
app.use('/products',products_router)

const blablaMiddleware = (req:Request, res:Response, next:NextFunction) => {
    // @ts-ignore
    req.blabla = 'Hello WORLD!'
    next()

};

const authGuard = (req:Request, res:Response, next:NextFunction) => {
  if(req.query.token !=='123'){
      res.send(401)
  }
    next()

};

let count =0;

const requestCounterMiddleware = (req:Request, res:Response, next:NextFunction) => {
   count+=1;
    next()

};

//app.use(requestCounterMiddleware);
app.use(blablaMiddleware);
app.use(authGuard);
app.get('/test',(req:Request, res:Response)=>{
   // @ts-ignore
    const blabla = req.blabla
    res.send({value:blabla + count})
})
app.get('/users',(req:Request, res:Response)=>{
   // @ts-ignore
    const blabla = req.blabla
    res.send({value:blabla+count})
})







app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});