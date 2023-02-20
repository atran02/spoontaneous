import styles from '../styles/Home.module.css'

export default function Button({text, link}){
    return <a href={link}>
        <div className={styles.mainButton}>
            {text}
        </div>
    </a>
}