import style from "./style.module.css"

export const HeaderContainer = ({children}) => {

    return (
        <div className={style.container}>
            {children}
        </div>
    )
}