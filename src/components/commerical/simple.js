import React from "react"

const Commercial = props => {
  let { title, description, waButton } = props
  return (
    <section>
      <h5>{title}</h5>
      <p>{description}</p>
      <a href={'http://wa.me/6281234567890?text=' + waButton.message}>{waButton.title}</a>
    </section>
  )
}

export default Commercial
