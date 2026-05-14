import './App.css'
import Product from './components/Product';
import products from './data/products';

function App() {
  // Return react element
  return (
    <div>
      <div className='grid grid-cols-4 m-20 text-center gap-10'>
        {products.map((product) => (
          <Product productObj={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default App;