import React from 'react';
import RedTemplateProductCard from '../componets/RedTemplateProductCard';
import RedTemplateCover from '../componets/RedTemplateCover';

const RedTemplateMain = ({ products, shop }) => {
  return (
    <main className="RedTemplateMain" id={`shop-${shop._id}`}>
      <RedTemplateCover title={shop.name} description={shop.description}/>
      <div>
        { products.map(product => (
          <div key={product._id}>
          <RedTemplateProductCard {...product} />
          </div>
        ))}
    </div>
    </main>
  );
};

export default RedTemplateMain;