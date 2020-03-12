import { platformBrowserDynamic } from 'angular-ts-decorators';
import { TodoModule } from "./src/todo.module";

const onDeviceReady = () => {
    platformBrowserDynamic().bootstrapModule(TodoModule);
};

document.addEventListener('deviceready', onDeviceReady, false);

