import 'regenerator-runtime/runtime';
import App from "./components/App";
import Comics from "./components/Comics";


/**
 * Обращение к методу render в ананимно-самовызывающейся функции
 */
    (async () => {
        await App.render();
        Comics.eventListener();
    })();