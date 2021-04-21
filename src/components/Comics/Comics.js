import {API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDART_XLARGE, IMG_NOT_AVAILABLE} from '../../constants/api';
import {getDataApi} from "../../utils/getDataApi";
import {ROOT_INDEX} from "../../constants/root";
import {pagination} from "../../utils/Pagination";

import Characters from "../Characters";
import Error from "../Error";

import './Comics.css'

class Comics {

    renderComics(data){
    let htmlContent = '';

    data.forEach(({id, title, thumbnail: {path, extension}}) => {

     if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
        const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
        const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;

        htmlContent += `
                <li class="comics__item" data-uri="${uri}">
                    <span class="comics__name">${title}</span>
                    <img class="comics__img" src="${imgSrc}" />
                </li>
                `;
      }
    });

    const htmlWrapper = `
            <ul class="comics__container">
                ${htmlContent}
            </ul>
            <div class="container__pages">
            <button type='button' class="page page_way">к началу</button>
            <button type='button' class="page page_way">назад</button>
            <button type='button' class="page page_round">1</button>
            <button type='button' class="page page_way page_next">вперед</button>
            </div>
            
        `;

    ROOT_INDEX.innerHTML = htmlWrapper;
    }


    /**
     * Внутри ренлера
     * Асинхронно-самовызывающаяся функция, внутри кот отправляем запрос и выводим результат
     */
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        if(data){
            this.renderComics(data);
        } else {
            Error.render();
        }

    }

    /**
     * Метод для навешивания обработчиков события.
     */
    eventListener(){
        document.querySelectorAll('.comics__item').forEach(element => {
            /**
             * Запрос текущего url элемента
             * @type {string}
             */
            const uri = element.getAttribute('data-uri');

            element.addEventListener('click', () => {
                Characters.render(uri);
            })
        })
        document.querySelectorAll('.page_next').forEach(element => {
            element.addEventListener('click', () =>{
                let data = pagination.nextPage();
                if(data.length){
                    Characters.renderContent(data);}
            })
        })
    }


}

export default new Comics();