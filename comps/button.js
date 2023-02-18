import styles from '../styles/Home.module.css'

export default function Button({text}){
    return <div className={styles.mainButton}>
        {text}
    </div>
}