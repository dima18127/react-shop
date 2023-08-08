// import { useEffect, useState } from 'react';
import { useState } from 'react';
import './App.css';
import CreateProduct from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/loader';
import Modal from './components/modal';
import Product from './components/product';
import { useProduct } from './hooks/products';
import { Iproduct } from './models';

function App() {
  const {loading, products, error, addProduct} = useProduct();
  const [modal, setModal] = useState(true)
  const createHandler = (product:Iproduct)=>{
    addProduct(product)
    setModal(false)
  }
  const closeHandler = ()=>{
    setModal(false)
  }
  return (
    <>
      <div className="mx-auto max-w-3xl">
        {error && <ErrorMessage error={error}/>}
        {loading && <Loader/>}
        {products.map(product => <Product key={product.id}  product={product}/> )}
        {modal && 
        <Modal onClose={closeHandler} title="Create new product">
          <CreateProduct onCreate={createHandler}/>
        </Modal>
        }
        <button
        className='fixed bottom-5 right-5 border bg-emerald-900 px-4 py-2 text-white rounded-full'
        onClick={()=> {setModal(true)}}
        >+</button>
        
      </div>
    </>
  )
}

export default App
