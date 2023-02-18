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

export default function Test() {
  return (
    <>
      
    </>
  )
}
