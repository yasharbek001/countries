import style from './style.module.css'

export function Input({name="input", type="text", placeholder="Search", 
onChange = () => {}}) {
    return (
        <input className={style.input} name={name} type={type} placeholder= {placeholder} onChange={onChange}/>
    )
}