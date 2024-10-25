import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = (prop) => {

    const [Product, setProduct] = useState({ Title: "", Discounted_Price: "", Price: "", Discription: "" })

    const AddProduct = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/Product', Product)
            .then(res => {
                console.log(res)
                alert("New data inserted")
                prop.FetchData()
            })
            .catch(err => console.log(err))
    }

    return (

        <div className='mt-8'>

            <form className='flex justify-center gap-10' onSubmit={AddProduct}>
                <input onChange={(e) => { setProduct({ ...Product, Title: e.target.value }) }} type="text" placeholder='Title' className='p-2 border border-gray-200 rounded-xl' />
                <input onChange={(e) => { setProduct({ ...Product, Discounted_Price: e.target.value }) }} type="text" placeholder='Price' className='p-2 border border-gray-200 rounded-xl' />
                <input onChange={(e) => { setProduct({ ...Product, Price: e.target.value }) }} type="text" placeholder='Discount price' className='p-2 border border-gray-200 rounded-xl' />
                <input onChange={(e) => { setProduct({ ...Product, Discription: e.target.value }) }} type="text" placeholder='Discription' className='p-2 border border-gray-200 rounded-xl' />

                <button className="AddButton w-fit p-2 px-4 bg-green-500 rounded-xl text-white font-bold cursor-pointer
            hover:bg-green-600 hover:transition-all hover:scale-105 hover:shadow-lg"
                    type='submit'>
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddProduct
