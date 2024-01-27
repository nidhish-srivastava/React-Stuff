import { Fragment, useState } from "react"
// Question : make radio buttons to choose  1 game and 1 type of day

export default function RadioButton(){
    const options = ["cricket", "football","basketball"]
    const days = ["weekday","weekend"]
    const [selecGame,setSelectGame] = useState("")
    const [selectDay,setSelectDay] = useState("")
    return(
        <Fragment>
            {options.map((e,i)=>(
                <div>
                <input type="radio"  checked = {selecGame==e} onChange={e=>setSelectGame(e.target.value)} value={e} name="" id={e} />
                    <label htmlFor={e} >{e}</label>
                </div>
            ))}
            {selecGame}
            <br />
            <br />
            {
                days.map((e,i)=>(
                    <div>
                    <input type="radio" value={e} checked = {selectDay==e} onChange={e=>setSelectDay(e.target.value)} name="day"/>
                    <label htmlFor="day">{e}</label>
                    </div>
                ))
            }
            {selectDay}
            <h3>Creating a radio group</h3>

            {options.map((e,i)=>(
                <>
                <input type="radio" onChange={e=>setSelectGame(e.target.value)} value={e} name="game" id={e} />
                    <label htmlFor={e} >{e}</label>
                </>
            ))}
            <br />
            {selecGame}

        </Fragment>
    )
}