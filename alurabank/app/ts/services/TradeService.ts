import { Trade, PartialTrade } from "../models/index";

export class TradeService {

    getTrades(handler: HandlerFunction) : Promise<void | Trade[]> {
        //Execute a GET request to retrieve the data from the thrid-party API
        return fetch("http://localhost:8080/dadosd")
            .then(res => handler(res))
            .then(res => res.json())
            .then((dataArray : PartialTrade[]) =>
                dataArray
                    .map(data => new Trade(new Date(), data.vezes, data.montante))
            )
            .catch(err => {
                console.log(err);
                throw new Error("Failed to connect with server and import trades. Please try again later.");
            });

    }
}

export interface HandlerFunction {
    (res: Response) : Response;
}