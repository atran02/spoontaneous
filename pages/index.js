import Head from 'next/head'
import Image from 'next/image'
import { Overpass } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import foods from '../data/food_data'
import NavBar from '@/comps/nav'
import Footer from '@/comps/footer'
import Button from '@/comps/button'
import { useEffect, useState } from 'react'

const overpass = Overpass({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Home() {
  const [emote, setEmote] = useState();
  const [man, setMan] = useState();
  const [woman, setWoman] = useState();

  useEffect(()=>{
    let emojiM = Math.floor(Math.random()*(12-3)+3);
    setMan(emojiM);
  },[])
  useEffect(()=>{
    let emojiW = Math.floor(Math.random()*(12-3)+3);
    setWoman(emojiW);
  },[])

  return (
    <>
      <Head>
        <title>Spoontaneous</title>
        <meta name="description" content="make each meal a surprise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/sLogo.svg" />
      </Head>
      <main className={overpass.className}>
        {/* <NavBar/> */}
    
          <div className={styles.mainHome}>
            <div className={styles.divTrans}>
              
              <div className={styles.divOpaque}>
                <Image className={styles.logoTxt} src='/assets/logoText.svg' width={371.5} height={53} unoptimized />
                
                <div className={styles.opaqueCont}>
                  <div className={styles.emojiMain}>
                    <div>
                      <Image className={styles.emoji} src={`/assets/${man}.png`} width={28} height={28} onClick={()=>{
                        setEmote(1)
                      }} unoptimized />
                        {
                          emote && <Image
                            src={`/assets/${emote}.png`}
                            width={28}
                            height={28}
                            unoptimized
                          />
                        }
                      <Image className={styles.emoji} src={`/assets/${woman}.png`} width={28} height={28} onClick={()=>{
                        setEmote(2)
                      }} unoptimized />
                    </div>
                  </div>
                  <p className={styles.mainTxt}>
                    <span className={styles.txtCol}>Make every meal a surprise.</span>
                    <br/>
                    Get started by clicking the button below to generate a random recipe from Epicurious!
                  </p>
                  <Button text={'Give Me A Recipe'} link={'/recipe'}/>
                </div>
              </div>
            </div>
          
          </div>
      <Footer/>
      </main>
    </>
  )
}
