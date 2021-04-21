import getDataApi from "./getDataApi";
import {API_URL, URL_COMICS} from "../constants/api";

class Pagination {

    constructor(currentPage) {
        this.currentPage = 1;
    }



   nextPage(){
       let next = this.currentPage + 1;
       let pageData = await getDataApi.getData(API_URL + URL_COMICS, numPage);
        return pageData;
   }
}

export const pagination = new Pagination();