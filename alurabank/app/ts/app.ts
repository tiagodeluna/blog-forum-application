const tradeController = new TradeController();

document
    .querySelector(".form")
    .addEventListener("submit", tradeController.add.bind(tradeController))