export function logExecutionTime(inSeconds: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            //Define display time format according to input param
            let unit = inSeconds ? "s" : "ms";
            let divider = inSeconds ? 1000 : 1;
            //Display some info
            console.log("---------------");
            console.log(`Method: ${propertyKey}() | Params: ${JSON.stringify(args)}`);
            console.log("---------------");
            //Get time t1
            const t1 = performance.now();
            //Execute the decorated operation
            const result = originalMethod.apply(this, args);
            //Get time t2 and display the execution time
            const t2 = performance.now();
            console.log("The execution time of", propertyKey, "is", (t2-t1)/divider, unit);

            return result;
        }

        return descriptor;
    }
}