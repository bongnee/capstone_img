import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';
import cors from 'cors';

const app = express();
const port = 8080;



app.use(express.json());
app.use(cors()); 
app.use(rootRoutes);


app.get("/",(req,res)=>{
    res.send("Hello node38  img");
})



app.listen(port,()=> {
    console.log(`BE starting with port ${port}`)
})
