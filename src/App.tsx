// import { useEffect, useState } from 'react';
import './App.css';
import CreateProduct from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/loader';
import Modal from './components/modal';
import Product from './components/product';
import { useProduct } from './hooks/products';

function App() {
  const {loading, products, error} = useProduct();
  return (
    <>
      <div className="mx-auto max-w-3xl">
        {error && <ErrorMessage error={error}/>}
        {loading && <Loader/>}
        {products.map(product => <Product key={product.id}  product={product}/> )}
        <Modal>
          <CreateProduct/>
        </Modal>
      </div>
    </>
  )
}

export default App
