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
                <h2>Ingredients</h2>
                <ol>
                    <li>{ingredients}</li>
                </ol>
             </div>

             <div>
                <h2>Instructions</h2>
                <ol>
                    <li>{instructions}</li>
                </ol>
             </div>

        </div>
    </div>
}