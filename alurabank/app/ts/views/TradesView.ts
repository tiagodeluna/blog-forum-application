import { View } from "./View";
import { TradeList } from "../models/TradeList";

export class TradesView extends View<TradeList> {

    template(model: TradeList) : string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                        <th>VALUE</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.toArray().map(trade => {
                        return `
                            <tr>
                                <td>${trade.date.getDate()}/${trade.date.getMonth()+1}/${trade.date.getFullYear()}</td>
                                <td>${trade.amount}</td>
                                <td>${trade.value}</td>
                                <td>${trade.volume}</td>
                            </tr>
                        `;
                    }).join("")}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
            <script>alert('hello!');</script>
        `;
    }
}