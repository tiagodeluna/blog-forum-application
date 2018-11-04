import { Trade } from "./Trade";
import { Printable } from "./Printable";

export class TradeList implements Printable {
    private _trades : Array<Trade> = [];

    add(trade: Trade) : void {
        this._trades.push(trade);
    }

    toArray() : Trade[] {
        //Clone array to preserve encapsulation
        return this._trades.slice(0);
    }

    toString() : void {
        console.log("LIST OF TRADES:", JSON.stringify(this._trades));
    }
}