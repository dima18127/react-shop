import React, {SyntheticEvent } from 'react'
import { useState } from "react";
import { Iproduct } from '../models';
import { ErrorMessage } from './ErrorMessage';

const productData: Iproduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate:42,
    count:10
}
}
interface CreateProductProps {
  onCreate: (product:Iproduct)=> void
}


export default function CreateProduct({onCreate}:CreateProductProps) {
  const [value, setValue] = useState('');
  const [error, SetError] = useState('')
  const submitHandler = async(e:React.FormEvent) =>{
    e.preventDefault();
    SetError('')
    productData.title = value
    if(value.trim().length === 0){
      SetError('Please enter valid title.')
      return
    }
    const response = await fetch ('https://fakestoreapi.com/products', {
      method: 'post', 
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
  })
  const jsonData = await response.json()
  onCreate(jsonData)
  // onCreate(JSON.parse(response))
  }
  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)

  }

  return (
    <form onSubmit={submitHandler}>
      <input 
      type="text" 
      className='py-2 px-4 my-2 w-full border rounded outline-0'
      placeholder="Inter product tittle..."
      value={value}
      onChange={changeHandler}
      />
      {error && <ErrorMessage error={error}/>}
      <button 
      type='submit' 
      className='py-2 px-4 border bg-yellow-400 hover:text-white'
      >Create
      </button>
    </form>
  )
}
