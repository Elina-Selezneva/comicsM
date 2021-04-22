import {getDataApi} from "./getDataApi";
import {API_URL, URL_COMICS} from "../constants/api";
import {ROOT_PAGINATION} from "../constants/root";

class Pagination {

    constructor(currentPage) {
        this.currentPage = 1;
    }

   async renderPagination(){

        ROOT_PAGINATION.innerHTML = `
            <div class="container__pages">
            <button type='button' class="page page_way">к началу</button>
            <button type='button' class="page page_way">назад</button>
            <button type='button' class="page page_round">${this.currentPage}</button>
            <button type='button' class="page page_way page_next">вперед</button>
            </div>
        `

    }


   async nextPage(){
       this.currentPage ++;
       let pageData = await getDataApi.getData(API_URL + URL_COMICS, this.currentPage);
        return pageData;
   }
}

export const pagination = new Pagination();