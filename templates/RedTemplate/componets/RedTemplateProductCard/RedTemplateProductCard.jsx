import React from 'react'

const RedTemplateProductCard = ({ name, description, price, _id}) => {
  return (
    <article id={`product-${_id}`}>
      <header>
        <picture>
          Coming soon...
        </picture>
        <h2>{ name }</h2>
      </header>
      <main>
        <div>{price}</div>
      </main>
    </article>
  )
};

export default RedTemplateProductCard;