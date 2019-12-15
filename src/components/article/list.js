import React from "react"
import { ItemArticle } from "./index"
import { LoremIpsum } from "lorem-ipsum"

const List = props => {
  let { articles } = props
  if (!articles) {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 3,
        min: 2,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    })

    articles = []
    let article = () => {
      return {
        node: {
          fields: {
            slug: "something",
          },
          frontmatter: {
            title: lorem.generateWords(8),
            description: lorem.generateParagraphs(1),
            type: "ktp",
          },
        }
      }
    }
    articles.push(article())
    articles.push(article())
    articles.push(article())
    articles.push(article())
    articles.push(article())
  }
  return articles.map(item => <ItemArticle article={item.node} />)
}

export default List
