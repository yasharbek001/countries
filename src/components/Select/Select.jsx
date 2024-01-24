import style from './style.module.css'

export function Select({options = [], onChange = () => {}}) {

    return (
        <select className={style.select} defaultValue={options[0].value} onChange={onChange}>
            {
                options.map(data => (
                    <option className={style.option}
                        key={data.id} 
                        value={data.value} 
                        disabled={data.disabled}
                    >
                        {data.label}
                    </option>
                ))
            }
        </select> 
    )
}