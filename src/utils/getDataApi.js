import axios from "axios";
import {API_KEY} from "../constants/api";

/**
 * Класс отправляет запрос к серверу и вохвращает промис - результат выполнения запроса
 */
class GetDataApi {

    /**
     * Метод принимает url на который нужно отправить запрос
     * @param url
     */
    async getData(url, numPage){
        /**
         * Проверка на ошибку запроса
         */
        try{
            const response = await axios.get(url, {
                params: {
                    apikey: API_KEY,
                    limit: 100,
                    offset: numPage * 100,
                }
            });

            return response.data.data.results;
        } catch (error) {
            console.log(error.message);
            return false;
        }


    }
}

export const getDataApi = new GetDataApi();