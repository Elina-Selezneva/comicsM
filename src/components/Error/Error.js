import {ROOT_INDEX} from "../../constants/root";
import './Error.css';

class Error {

    render() {
        const htmlWrapper = `
            <div class="error_container">
                <span>
                <p class="error_alert">Произошла ошибка!</p>
                <p class="error_alert">Попробуйте позже.</p>
                </span>
            </div>
        
        `;
        ROOT_INDEX.innerHTML = htmlWrapper;
    }


}

export default new Error();