import { Trade, PartialTrade } from "../models/index";

export class TradeService {

    getTrades(handler: HandlerFunction) : Promise<void | Trade[]> {
        //Execute a GET request to retrieve the data from the thrid-party API
        return fetch("http://localhost:8080/dados")
            .then(res => handler(res))
            .then(res => res.json())
            .then((dataArray : PartialTrade[]) =>
                dataArray
                    .map(data => new Trade(new Date(), data.vezes, data.montante))
            )
            .catch(err => console.log(err));

    }
}

export interface HandlerFunction {
    (res: Response) : Response;
}