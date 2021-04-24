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
            <button type='button' class="page page_way page_first">к началу</button>
            <button type='button' class="page page_way page_prev">назад</button>
            <button type='button' class="page page_round">${this.currentPage}</button>
            <button type='button' class="page page_way page_next">вперед</button>
            </div>
        `

    }

    async loadCurrentPage(){
        return await getDataApi.getData(API_URL + URL_COMICS, this.currentPage);
    }

   async nextPage(){
       this.currentPage ++;
       return this.loadCurrentPage();
   }

   async prevPage(){
        if(this.currentPage > 1){
            this.currentPage --;
            return this.loadCurrentPage();
        }
   }

   async toFirstPage(){
       this.currentPage = 1;
       return this.loadCurrentPage();
   }
}

export const pagination = new Pagination();