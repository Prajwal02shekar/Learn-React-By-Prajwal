import  { useState,Fragment } from 'react'
import PRODUCTS from '../../product.json'
import { useLocation } from 'react-router-dom';
const Products = () => {
  let [products, setProducts] = useState(PRODUCTS)
  let location=useLocation();
  return (
    <main>
      <div className='products'>
      {
        products.map.length > 0 && products.map(product => (
          <Fragment key={product.id}>
            <div className="container">
              <figure>
                <picture>
                  <img src={product.image} alt={product.title} height={150} width={150} />
                </picture>
              </figure>
            </div>
          </Fragment>
        ))
      }
    </div>
    </main>
  )
}

export default Products