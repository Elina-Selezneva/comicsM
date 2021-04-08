import 'regenerator-runtime/runtime';
import App from "./components/App";


/**
 * Обращение к методу render в ананимно-самовызывающейся функции
 */
    (async () => {
        await App.render();
    })();