'use client'
import React, { ReactNode } from 'react'

const OverLay = ({
    isOpen,
    onClose,
    children
}:{
    isOpen:boolean,
    onClose: ()=>void,
    children:ReactNode
}) => {
  return (
    <div className={`fixed inset-0 p-10 flex items-center justify-center
    ${isOpen ? 'block' :'hidden'} z-50 bg-gray-950/[.90]
    `}
    onClick={onClose}
    >
        <div className="bg-gray-900 max-w-2xl relative w-full h-full border-gray-200 pt-10 overflow-hidden  shadow-lg border-2">
            <button className="absolute top-2 right-2 text-gray-300" onClick={onClose}>
                X
            </button>
            {children}
        </div>
    </div>
  )
}

export default OverLay