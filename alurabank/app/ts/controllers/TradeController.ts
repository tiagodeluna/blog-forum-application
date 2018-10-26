import { Trade, TradeList } from "../models/index";
import { MessageView, TradesView } from "../views/index";

enum DaysOfWeek {SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY};

export default class TradeController {

    private _inputDate: JQuery;
    private _inputAmount: JQuery;
    private _inputValue: JQuery;
    private _tradeList = new TradeList();
    private _tradesView = new TradesView("#tradesView");
    private _messageView = new MessageView("#messageView");

    constructor() {
        this._inputDate = $("#date");
        this._inputAmount = $("#amount");
        this._inputValue = $("#value");
        this._tradesView.update(this._tradeList);
    }

    add(event: Event) : void {
        event.preventDefault();
        
        let date = new Date(this._inputDate.val().replace(/-/g, ","));

        if (date.getDay() == DaysOfWeek.SUNDAY || date.getDay() == DaysOfWeek.SATURDAY) {
            this._messageView.update("The stock market is closed on the weekends.");
            return;
        }

        const trade = new Trade(
            date,
            parseInt(this._inputAmount.val()),
            parseFloat(this._inputValue.val())

        );

        this._tradeList.add(trade);
        
        this._tradesView.update(this._tradeList);
        this._messageView.update("Trade added successfully!");
    }
}