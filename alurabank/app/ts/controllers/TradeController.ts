class TradeController {

    private _inputDate: HTMLInputElement;
    private _inputAmount: HTMLInputElement;
    private _inputValue: HTMLInputElement;

    constructor() {
        this._inputDate = <HTMLInputElement> document.querySelector("#date");
        this._inputAmount = <HTMLInputElement> document.querySelector("#amount");
        this._inputValue = <HTMLInputElement> document.querySelector("#value");
    }

    add(event: Event) {
        event.preventDefault();
        
        const trade = new Trade(
            new Date(this._inputDate.value.replace(/-/g, ",")),
            parseInt(this._inputAmount.value),
            parseFloat(this._inputValue.value)
        );

        console.log(trade);
    }
}