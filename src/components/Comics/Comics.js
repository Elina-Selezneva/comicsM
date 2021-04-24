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

        pagination.renderPagination();
    }

    renderAndListener(data){
        data.then(
            result => {
                this.renderComics(result);
                pagination.renderPagination();
                this.eventListener();
            },
            error => {
                // error.render()
            } )
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

        document.querySelectorAll('.page_first').forEach(element => {
            element.addEventListener('click', () =>{
                let data = pagination.toFirstPage();
                this.renderAndListener(data);
            })
        })

        document.querySelectorAll('.page_next').forEach(element => {
            element.addEventListener('click', () =>{
                let data = pagination.nextPage();
                this.renderAndListener(data);
            })
        })

        document.querySelectorAll('.page_prev').forEach(element => {
            element.addEventListener('click', () =>{
                if (pagination.currentPage > 1){
                    let data = pagination.prevPage();
                    this.renderAndListener(data);
                }
            })
        })
    }


}

export default new Comics();