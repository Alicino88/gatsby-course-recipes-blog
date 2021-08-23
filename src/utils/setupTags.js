//recipes is an array
//each recipe is an object. The tags are inside an array inside the object tag
//for this reason we cannot map over the tags like we did for the recipes inside the RecipesList component

const setupTags = recipes => {
  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      console.log(tag)
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  //The method Object.entries creates an array (newTags) of tags
  //it takes each key/value pair inside the object and creates an puts them inside an array inside another array
  //allTags{dinner:2, breakfast:3} by applying Object.entries I get:
  //([dinner, 2], [breakfast, 3])

  //The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending,
  //in our case we want to sort based on the first element of the array that is the element of the tag
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  console.log(newTags)
  return newTags
}

export default setupTags
