import style from "./style.module.css"
import { BackBtn } from "../BackButton/BackButton"
import { useParams } from "react-router-dom"


export const Country = ({flag,countryName, nativeName, population, region, subregion, capital, tld, currencies, languages, borders}) => {
    const {name} = useParams()
    
    const nativeValue = Object.values(nativeName)
    const native = nativeValue[1]?.official || nativeValue[0]?.official

    const currenciesValue = Object.values(currencies)
    const currency = currenciesValue[0].name

    const languageValue = Object.values(languages)
    const language = languageValue[1] || languageValue[0]        

   
    return (
        <article className={style.card}>
            <div className={style.btnFlag}>
                <BackBtn/>
                <img className={style.img} src={flag} alt={name + "flag"} width="559" height="483"/>
            </div>
            <div className={style.countryInfo}>
                <div>
                    <h2>{countryName}</h2>
                    <div className={style.nativeName}>
                        <span className={style.text}>Native Name:
                            <span className={style.text2}>{native}</span> 
                        </span>
                        <span className={style.text}>Population:  
                            <span className={style.text2}>{population}</span>
                        </span>
                        <span className={style.text}>REgion: 
                            <span className={style.text2}>{region}</span>
                        </span>
                        <span className={style.text}>Sub Region: 
                            <span className={style.text2}>{subregion}</span>
                        </span>
                        <span className={style.text}>Capital: 
                            <span className={style.text2}>{capital}</span>
                        </span>
                    </div>
                </div>
                <div className={style.domain}>
                    <span className={style.text}>Top Level Domain: 
                        <span className={style.text2}>{tld}</span>
                    </span>
                    <span className={style.text}>Currencies: 
                        <span className={style.text2}>{currency}</span>
                    </span>
                    <span className={style.text}>Languages: 
                        <span className={style.text2}>{language}</span>
                    </span>
                </div>
            </div>
            <div className={style.border}>
                <span className={style.countries}>Border Countries: 
                    <span className={style.text2}>{borders?.map(item => <span style={{marginLeft:5}} key={item}>{item}</span>)}</span>
                </span>
            </div>
        </article>
    )
}