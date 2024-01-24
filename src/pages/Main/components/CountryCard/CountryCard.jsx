import style from "./style.module.css"
import { Link } from "react-router-dom"

export const CountryCard = ({img, name, population, region, capital}) => {

    return ( 
        <article className={style.card} >
            <Link to={`/detail/${name}`}>  
                <img className={style.image} src={img} alt={name + "flag"} width={267} height={160}/>
                <div className={style.cardBody}>
                    <h2 className={style.title}>{name}</h2>
                    <dl>
                        <div>
                            <dt className={style.dt}>Population:</dt>
                            <dd className={style.dd}>{population}</dd>
                        </div>
                        <div>
                            <dt className={style.dt}>Region:</dt>
                            <dd className={style.dd}>{region}</dd>
                        </div>
                        <div>
                            <dt className={style.dt}>Capital:</dt>
                            <dd className={style.dd}>{capital}</dd>  
                        </div>
                    </dl>
                </div>    
            </Link>
        </article>
    )
}   