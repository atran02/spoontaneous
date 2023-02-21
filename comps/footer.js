import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer()
{
    return  <div className={styles.footer}>
    <a
      href="https://github.com/atran02/"
      target="_blank"
    >
      {/* © */}
      Made By Angelyne {' '}
      <span className={styles.logo}>
        <Image src="/assets/8.png" alt="AngelyneTran" width={28} height={28} />
      </span>
    </a>
  </div>
    
}
