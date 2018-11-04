import TradeController from "./controllers/TradeController";

const tradeController = new TradeController();

$(".form").submit(tradeController.add.bind(tradeController));
$("#btn-import").click(tradeController.importData.bind(tradeController));