//Implements Throttling in decorated methods to avoid multiple Ajax executions. It assigns a timeout
// for a given client to be able to access a service resource again after a previous call.
export function throttle(miliseconds: number = 500) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;
        let timer = 0;

        descriptor.value = function(...args: any[]) {
            // Check if the event implicit parameter was passed and, if so, call preventDefault().
            if (event) event.preventDefault();

            //Clear timer and start timeout again to meet the "Throttle" pattern.
            clearTimeout(timer);
            timer = setTimeout(() => originalMethod.apply(this, args), miliseconds);
        }

        return descriptor;
    };
}