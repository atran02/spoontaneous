import styles from '../styles/Home.module.css'

export default function Button({text, link}){
    return <a href={link}>
        <button id='mainButton'>
            {text}
        </button>
    </a>
}