import { Trade, TradeList, PartialTrade } from "../models/index";
import { MessageView, TradesView } from "../views/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { TradeService, HandlerFunction } from "../services/index";
import { print } from "../helpers/index";

enum DaysOfWeek {SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY};
let timer = 0;

export default class TradeController {

    @domInject("#date")
    private _inputDate: JQuery;
    @domInject("#amount")
    private _inputAmount: JQuery;
    @domInject("#value")
    private _inputValue: JQuery;
    private _tradeList = new TradeList();
    private _tradesView = new TradesView("#tradesView");
    private _messageView = new MessageView("#messageView");
    private _tradeService = new TradeService();

    constructor() {
        this._tradesView.update(this._tradeList);
    }

    @throttle()
    add() : void {
        //NOTE: The event.preventDefault() call is being executed by throttle
        
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

        print(trade, this._tradeList, date);

        this._tradesView.update(this._tradeList);
        this._messageView.update("Trade added successfully!");
    }

    @throttle()
    importData(event: Event) : void {
        const isOk : HandlerFunction = res => {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        //Get data from trade service
        this._tradeService.getTrades(isOk)
            .then((trades : Trade[]) => {
                const importedTrades = this._tradeList.toArray();

                trades
                    .filter(trade =>
                        !importedTrades.some(imported =>
                            trade.isEqualTo(imported)))
                    .forEach(trade => 
                        this._tradeList.add(trade));

                this._tradesView.update(this._tradeList);
            })
            .catch(err => {
                this._messageView.update(err.message);
            });

    }
}