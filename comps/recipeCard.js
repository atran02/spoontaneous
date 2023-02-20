import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function RecipeCard(
    {
        heading,
        foodImg,
        ingredients,
        instructions
    }
){
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
                    <li>{instructions}</li>
                </ol>
             </div>

        </div>
    </div>
}