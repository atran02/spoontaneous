import Head from 'next/head'
import Image from 'next/image'
import { Overpass } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import foods from '../data/food_data'
import NavBar from '@/comps/nav'
import Footer from '@/comps/footer'
import Button from '@/comps/button'

const overpass = Overpass({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={overpass.className}>
        <NavBar/>
    
          <div className={styles.mainHome}>
            <div className={styles.divTrans}>
              <div className={styles.divOpaque}>
                <Image className={styles.logoTxt} src='/assets/logoText.svg' width={371.5} height={53}/>
                <div>
                  <Image className={styles.emoji} src='/assets/womanCookEmoji.png' width={28} height={28}/>
                  <Image className={styles.emoji} src='/assets/manCookEmoji.png' width={28} height={28}/>
                  <p>
                    <span className={styles.txtCol}>Make every meal a surprise.</span>
                    Get started by clicking the button or one of the 
                    randomly generated images for your next meal!
                  </p>
                </div>
              </div>
            </div>
          
          </div>
      <Footer/>
      </main>
    </>
  )
}
