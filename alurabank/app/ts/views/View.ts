import { logExecutionTime } from "../helpers/decorators/index";

export abstract class View<T> {

    private _element : JQuery;
    private _escape : boolean;

    constructor(selector : string, escape: boolean = true) {
        //Without JQuery: this._element = document.querySelector(selector);
        this._element = $(selector);
        this._escape = escape;
    }

    @logExecutionTime(true)
    update(model: T) : void {
        let template = this.template(model);
        if (this._escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
        }
        //Without JQuery: this._element.innerHTML = template;
        this._element.html(template);
    }

    abstract template(model : T) : string;

}