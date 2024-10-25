import React, { useState } from 'react'

const AddProduct = () => {

    const [Title, setTitle] = useState()
    const [Price, setPrice] = useState()
    const [DisPrice, setDisPrice] = useState()
    const [Discription, setDiscription] = useState()
    const AddProduct = () => { alert("Add Product") }

    return (
        <div className='flex justify-center gap-10 mt-8'>
            <input onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='Title' className='p-2 border border-gray-200 rounded-xl' />
            <input onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder='Price' className='p-2 border border-gray-200 rounded-xl' />
            <input onChange={(e) => { setDisPrice(e.target.value) }} type="text" placeholder='Discount price' className='p-2 border border-gray-200 rounded-xl' />
            <input onChange={(e) => { setDiscription(e.target.value) }} type="text" placeholder='Discription' className='p-2 border border-gray-200 rounded-xl' />

            <div className="AddButton w-fit p-2 px-4 bg-green-500 rounded-xl text-white font-bold cursor-pointer
            hover:bg-green-600 hover:transition-all hover:scale-105 hover:shadow-lg"
                onClick={AddProduct}>
                Add
            </div>

        </div>
    )
}

export default AddProduct
