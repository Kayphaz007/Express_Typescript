import express, { Express, Request, Response } from "express";
const PORT = 8080;

let app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('GET request to the homepage')
})

app.listen(PORT, ()=>{
    console.log(`Running server in port ${PORT}`);
})