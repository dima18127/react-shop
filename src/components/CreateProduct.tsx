// import React from 'react'

export default function CreateProduct() {
  return (
    <form>
      <input 
      type="text" 
      className='py-2 px-4 my-2 w-full border rounded outline-0'
      placeholder="Inter product tittle..."
      />
      <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-white' >Create</button>
    </form>
  )
}
