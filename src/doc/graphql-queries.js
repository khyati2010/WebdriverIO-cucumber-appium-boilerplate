export const HOME_QUERY = `
homepageCollection{
    items{
        pageModulesCollection{
            items{
                __typename
            }
        }
    }
}`;

export const HOME_SERIES_CARD = `{
    
}`

export const FB_INSTA_CARD_QUERY = `
homepageCollection{
    items{
      instagramCard{
        instagramUrl
      }
      facebookCard{
      facebookUrl
    }
    }
  }
`

export const _404_COLLECTION_TITLE_AND_COPY = `
contentType404Collection{
  items{
      title
      copy
  }
}`

export const ARTICLE_COUNT_BETWEEN_DATES = `
query($d1: DateTime, $d2: DateTime){
  publicArticleCollection(where:{goLiveDate_gte:$d1 AND:{goLiveDate_lte: $d2}}){
    total
  }
}`

export const CATEGORY_OF_ARTICLE = `
query($condition:PublicArticleFilter){
  publicArticleCollection(where:$condition){
    items{
      category{
        name
      }
    }
  }
}`

export const TAGS_OF_ARTICLE = `
query($condition:PublicArticleFilter){
  publicArticleCollection(where:$condition){
    items{
      tagsCollection{
        items{
          name
        }
      }
    }
  }
}`

export const PAGE_MODULE_OF_CATEGORY_PAGE = `
query($condition:CategoryFilter){
  categoryCollection(where: $condition){
    	items{
        pageModulesCollection{
          items{
            __typename
          }
        }
      }
  }
}`

export const ARTICLE_META_INFO= `
query($url:String){
  publicArticleCollection(where:{url:$url}){
    items{
      	authorsCollection{
          items{
            firstName
            lastName
          }
        }
      	goLiveDate
      	category{
          name
        }
      tagsCollection{
        items{name}
      }
      	article{
					... on ArticleRecipe{
            servingSize
            difficulty
            cookingTime
            prepTime
          }
        }
    }
  }
}`

export const INGREDIENTS_OF_RECIPE = `
query($url:String){
  publicArticleCollection(where:{url:$url}){
    items{
      	article{
					... on ArticleRecipe{
            pageModulesCollection{
              ... on ArticleRecipePageModulesCollection{
               	items{
                  ... on IngredientList{
                    title
                    ingredientCollection{
                      items{
                        copy
                        measurement
                      }
                    }
                  }
                } 
              }
            }
          }
        }
    }
  }
}
`
const PAGE_MODULE_FRAG = `pageModulesCollection{
  items{
    __typename
  }
}`
export const PAGE_MODULE_OF_ARTICLE_PAGE = `
# Write your query or mutation here
query($url:String){
  publicArticleCollection(where:{url:$url}){
    items{
      article{
        ... on ArticleWorkout{
          ${PAGE_MODULE_FRAG}
        }
        ... on ArticleRecipe{
          ${PAGE_MODULE_FRAG}
        }
        ... on ArticleQa{
          ${PAGE_MODULE_FRAG}
        }
        ... on Article48Hours{
          ${PAGE_MODULE_FRAG}
        }
        ... on ArticleListicle{
          ${PAGE_MODULE_FRAG}
        }
        ... on ArticleShort{
          ${PAGE_MODULE_FRAG}
        }
        ... on ArticleLong{
          ${PAGE_MODULE_FRAG}
        }
      }
    }
  }
}`