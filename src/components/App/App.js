import {API_KEY, API_URL, URL_COMICS} from '../../constants/api';
import {getDataApi} from "../../utils/getDataApi";

import './App.css';

class App {

  /**
   * Внутри ренлер а
   * Асинхронно-самовызывающаяся функция, внутри кот отправляем запрос и выводим результат
   */
  async render(){
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    console.log(data);
    }
}

/**
 * Экспорт по умолчанию
 */
export default new App();