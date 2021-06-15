import React, { useEffect, useState } from 'react'
import styles from './pet_card.css'

function PetCard(props) {
    const [isFull, setIsFull] = useState(false)

    useEffect(() => console.log(isFull), [isFull])

    return (
        <div className={props.className} >
            <img className={"instagramImg"} key={props.index} src={props.url} />
            <div class={isFull ? "full_overlay" :"overlay"} onClick={() => setIsFull(!isFull)} >
               {isFull ? props.caption: props.caption.substr(12, 70) + "..."}
            </div>

        </div>



    )
}
export default PetCard