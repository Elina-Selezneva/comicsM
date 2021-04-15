import Comics from "../Comics";
import './App.css';

class App {


  async render(){
    await Comics.render();
    }
}

/**
 * Экспорт по умолчанию
 */
export default new App();