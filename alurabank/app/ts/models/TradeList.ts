import { Trade } from "./Trade";
import { Printable } from "./Printable";
import { Equable } from "./Equable";

export class TradeList implements Printable, Equable<TradeList> {
    private _trades : Array<Trade> = [];

    add(trade: Trade) : void {
        this._trades.push(trade);
    }

    isEqualTo(other : TradeList) : boolean {
        return JSON.stringify(this._trades) == JSON.stringify(other.toArray());
    }

    toArray() : Trade[] {
        //Clone array to preserve encapsulation
        return this._trades.slice(0);
    }

    toString() : void {
        console.log("LIST OF TRADES:", JSON.stringify(this._trades));
    }
}