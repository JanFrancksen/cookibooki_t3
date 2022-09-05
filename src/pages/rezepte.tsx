import React from 'react'
import recipes from "../data/recipes.json"
import RecipeItem from "../components/recipes/RecipeItem"


const Rezepte = () => {

  
  const recipeList = recipes.map((recipe) =>
  <RecipeItem key={recipe.id} image={recipe.img} title={recipe.title} description={recipe.content} />
);


  return (
    <div>
      <div className='relative w-full h-72 flex flex-col gap-8 items-center justify-center py-72 bg-rezepteHero bg-cover bg-no-repeat bg-fixed before:inset-0 before:absolute before:bg-black before:opacity-40'>
        <h1 className='header1 z-10'>Finde dein neues Lieblingsrezept!</h1>
      <div className='z-10'>
        <input
         type="text" placeholder="Search.." className='py-2 px-4 rounded-full mr-4' /> <button className='bg-cb_green py-2 px-4 rounded-full'>suchen</button>
        </div>
      <div className='flex flex-row gap-2 items-center z-10'>
      <button className="bg-cb_green px-2 py-1 rounded-full text-xs">+ vegan</button>
      <button className="bg-cb_green px-2 py-1 rounded-full text-xs">+ vegetarisch</button>
      <button className="bg-cb_green px-2 py-1 rounded-full text-xs">+ glutenfrei</button>
      <button className="bg-cb_green px-2 py-1 rounded-full text-xs">+ laktosefrei</button>
      <button className="bg-cb_green px-2 py-1 rounded-full text-xs">+ fructosefrei</button>
      <button className="bg-cb_green px-2 py-1 rounded-full text-xs">+ mit Fleisch</button>
      <button className="bg-cb_green px-2 py-1 rounded-full text-xs">+ mit Nudeln</button>
        </div>
      </div>

      <div className='grid grid-cols-3 w-3/4 m-auto gap-8 -mt-16 mb-16 z-20' id="recipeContainer">
        {recipeList}
      </div>
    </div>
  )
}

export default Rezepte