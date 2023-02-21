import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function RecipeCard(
    {
        heading,
        foodImg,
        ingredients,
        instructions
    }
){
    // const [ingItem, setIngItem] = useState(Array = ingItem);

    return <div className={styles.recCard}>
        <div className={styles.recCont}>
             <h1>{heading}</h1>
             <Image src={foodImg} width={525} height={290}/>
             <div className={styles.ingSec}>
                <h2>INGREDIENTS</h2>
                <ul>
                    <li>{ingredients}</li>
                </ul>
             </div>

             <div className={styles.instCont}>
                <h2>INSTRUCTIONS</h2>
                <ol>
                    {
                        instructions && instructions.map((ins, index)=>{
                            return(
                                <li key={instructions}>
                                    {ins}
                                </li>
                            )
                        })
                    }
                </ol>
             </div>

        </div>
    </div>
}