import React from 'react'
import CarouselElement from './CarouselElement'

const Carousel = () => {

    const recipes = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
      ];


      const recipeList = recipes.map((recipe) =>
      <CarouselElement key={recipe.id} title={recipe.title} />
    );


  return (
    <div className='flex gap-x-8'>
        {recipeList}
    </div>
  )
}

export default Carousel