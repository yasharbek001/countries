import { Link } from "react-router-dom"
import style from "./style.module.css"
export const BackBtn = () => {

    return (
        <Link to={"/"} className={style.button}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" fill="#111517"/>
            </svg>
            <span className={style.text}>Back</span>
        </Link>
    )
}