import Head from 'next/head'
import Image from 'next/image'
import { Overpass } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import foods from '../data/food_data.json'
import NavBar from '@/comps/nav'
import Footer from '@/comps/footer'
import Button from '@/comps/button'
import BtnCard from '@/comps/btnCard'
import RecipeCard from '@/comps/recipeCard'

const overpass = Overpass({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Recipe() {
  return (
    <>
      <Head>
        <title>Spoontaneous | Random Recipe</title>
        <meta name="description" content="randomly generated recipe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/sLogo.svg" />
      </Head>

      <main className={overpass.className}>
        <NavBar/>

        <div className={styles.mainRecipe}>
            <div>
              <RecipeCard foodImg={"/Food Images/italian-sausage-and-bread-stuffing-240559.jpg"} 
                heading={'Miso-Butter Roast Chicken With Acorn Squash Panzanella'}
                ingredients={'small'}
                instructions={'apples are tender, about 15 minutes. Remove from oven, drain pickled onions, and toss to combine. Transfer to a serving dish.'}
                />
          </div>
        </div>

        <Footer/>
      </main>

    </>
  )
}
