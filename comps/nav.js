import styles from '../styles/Home.module.css'

export default function NavBar()
{
    return <div>
        <div className={styles.nav}>
            <a href='/'>          
                <img className={styles.logoTxt} src='/assets/logoText.svg' />
            </a>  
        </div>
    </div>
}
