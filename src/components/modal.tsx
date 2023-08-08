import React from 'react';

interface ModalProps {
    children: React.ReactNode
}

function Modal({children}:ModalProps) {
  return (
    <>
    <div className='fixed bg-black/50 top-0 left-0 right-0 bottom-0'/>
    <div className='bg-white w-[500px] p-5 rounded absolute top-10 left-1/2 -translate-x-1/2'><h1>Modal</h1>
    {children}
    </div>
    </>
  )
}

export default Modal
