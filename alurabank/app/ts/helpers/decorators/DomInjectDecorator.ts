//Decorator that enables lazy-loading for properties that manipulate DOM elements
export function domInject(selector: string) {

    return function(target: any, key: string) {

        let element: JQuery;

        const getter = function() {
            if (!element) {
                console.log(`Retrieving DOM element by selector: ${selector}`);
                element = $(selector);
            }

            return element;
        }

        //Define property with a getter function
        Object.defineProperty(target, key, {
            get: getter
        });
    }
}