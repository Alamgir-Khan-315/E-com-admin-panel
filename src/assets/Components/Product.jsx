import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct'
import axios from 'axios'

const Projuct = () => {

    const [ToggleAddProjuct, setToggleAddProjuct] = useState(false)
    // const [Title, setTitle] = useState()
    // const [Products, setProducts] = useState[""]

    useEffect(() => {
        const FetchData = () => {
            axios.get('http://localhost:5000/Product')
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        }
        FetchData()
    }, []);

    return (
        <div className='container mx-auto p-10 my-10 bg-white rounded-2xl'>

            <div className="add-product w-fit p-2 bg-green-500 rounded-xl text-white font-bold cursor-pointer
            hover:bg-green-600 hover:transition-all hover:scale-105 hover:shadow-lg"
                onClick={() => setToggleAddProjuct(!ToggleAddProjuct)}>Add new product
            </div>

            <div className="Add-Product">
                {ToggleAddProjuct === true && <div className='transition-all'><AddProduct /></div>}
                <hr className='mt-5' />
            </div>

            <div className="productView">
                fetch data here
            </div>

        </div>
    )
}

export default Projuct
