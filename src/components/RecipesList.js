import React from "react"
import { Link } from "gatsby"
//Images are dynamic and coming from Contentful, GatsbyImage component is used instead of StaticImage
//getImage helper function in case there is no image and we are trying to access the property gatsbyImageData on it
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

//recipes object is coming as a prop from AllRecipes component where we've set up the query
//{ recipes = [] } means that if no recipe is provided than recipes is equal to an empty array
const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const pathToImage = getImage(recipe.image)
        const slug = slugify(recipe.title, { lower: true })
        return (
          <Link to={`/${slug}`} key={recipe.id} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              aly={recipe.title}
            ></GatsbyImage>
            <h5>{recipe.title}</h5>
            <p>
              Prep : {recipe.cookTime}min | Cook : {recipe.prepTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
