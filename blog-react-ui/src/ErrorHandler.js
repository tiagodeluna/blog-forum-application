import PubSub from 'pubsub-js';

export default class ErrorHandler {
    
    showErrors(data) {
        for (var i = 0; i < data.errors.length; i++) {
            PubSub.publish("validation-error", data.errors[i]);
        }
    }
}