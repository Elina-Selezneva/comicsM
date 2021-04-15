import './Characters.css';
import {getDataApi} from "../../utils/getDataApi";
import {IMG_STANDART_XLARGE} from "../../constants/api";
import {ROOT_MODAL} from '../../constants/root';
import Notification from "../Notification";
import imgClose from "./img/cancel.svg"

class Characters {

    renderContent(data){
        let htmlContent = '';

        data.forEach(({ name, thumbnail: {path, extension} }) => {
            const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;

            htmlContent += `
            
            <li class="characters__item">
                <img class="characters__img" src="${imgSrc}" />
                <span class="characters__name">${name}</span>
            </li>
            `
        })

        const htmlWrapper = `
        <div class="wrapper">
            <ul class="characters__container">
                ${htmlContent}        
            </ul>
            <button
             class="characters__close"
             onclick="modal.innerHTML = ''"
             style="background-image: url(${imgClose});"
             ></button>
        </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    renderNotification(){

    }

    async render(uri){
        const data = await getDataApi.getData(uri);

        if(data.length){
            this.renderContent(data);
        } else {
            Notification.render();
        }

    }
}

export default new Characters();