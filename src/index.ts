import express, { Request, Response } from 'express';
import { addresses_router } from "./routes/addresses_route";
import { products_router } from "./routes/products_route";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Deniska!');
});
app.use('/addresses',addresses_router)

app.use('/products',products_router)







app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});