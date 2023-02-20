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

import { useState, useEffect} from 'react'


const overpass = Overpass({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Recipe() {
  
  const [recipe, setRecipe] = useState({});
  
  useEffect(()=>{
    let recipeNum = foods[Math.floor(Math.random()*foods.length - 1)];
    setRecipe(recipeNum);
    recipeNum.recipeInstruct = recipeNum.Instructions.split("\n")
  },[])
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
              <Button text={'NEW RECIPE'} link={'/recipe'}/>
            <div>
              <RecipeCard foodImg={`/Food Images/${recipe.Image_Name}.jpg`} 
                heading={recipe.Title}
                ingredients={recipe.Cleaned_Ingredients}
                instructions={recipe.recipeInstruct}
                />
                {/* {
                  recipe.recipeInstruct && recipe.recipeInstruct.map(())
                } */}
          </div>
        </div>

        <Footer/>
      </main>

    </>
  )
}
