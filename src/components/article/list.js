import React from "react"
import { ItemArticle } from "./index"

const List = props => {
  let { articles } = props
  return articles.map(item => <ItemArticle article={item.node} />)
}

export default List
