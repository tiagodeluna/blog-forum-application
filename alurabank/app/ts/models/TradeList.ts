import { Trade } from "./Trade";

export class TradeList {
    private _trades : Array<Trade> = [];

    add(trade: Trade) : void {
        this._trades.push(trade);
    }

    toArray() : Trade[] {
        //Clone array to preserve encapsulation
        return this._trades.slice(0);
    }
}