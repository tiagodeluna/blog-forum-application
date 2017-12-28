import PubSub from 'pubsub-js';

export default class ErrorHandler {
    
    showErrors(data) {
        console.log("DATA: "+data.errors.length);
        for (var i = 0; i < data.errors.length; i++) {
            console.log("DATA.ERROR: "+data.errors[i]);
            PubSub.publish("validation-error", data.errors[i]);
        }
    }
}