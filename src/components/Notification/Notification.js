import {ROOT_MODAL} from '../../constants/root';
import './Notification.css';
import imgClose from "./img/cancel.svg"

class Notification {
    render(){
       const htmlWrapper = `
       
            <div class="notification__container">
            <span>Нет контента</span>
            <button
             class="notification__close"
             onclick="modal.innerHTML = ''"
             style="background-image: url(${imgClose});"
             ></button>
            </div>
       `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }
}

export default new Notification();