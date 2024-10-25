import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct'
import axios from 'axios'

const Projuct = () => {

    const [ToggleAddProjuct, setToggleAddProjuct] = useState(false)
    const [Title, setTitle] = useState([])
    const [Products, setProducts] = useState([])

    const FetchData = () => {
        axios.get('http://localhost:5000/Product')
            .then(res => {
                console.log(Object.keys(res.data[0]))
                setTitle(Object.keys(res.data[0]))
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        FetchData()
    }, []);

    function DeleteProduct(id) {
        axios.delete(`http://localhost:5000/Product/` + id)
            .then(res => {
                console.log(res)
                alert("Product deleted")
                FetchData()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container mx-auto p-10 my-10 bg-white rounded-2xl'>

            <div className="add-product w-fit p-2 bg-green-500 rounded-xl text-white font-bold cursor-pointer
            hover:bg-green-600 hover:transition-all hover:scale-105 hover:shadow-lg"
                onClick={() => setToggleAddProjuct(!ToggleAddProjuct)}>Add new product
            </div>

            <div className="Add-Product">
                {ToggleAddProjuct === true && <div className='transition-all'><AddProduct FetchData={FetchData} /></div>}
                <hr className='mt-5' />
            </div>

            <div className="productView">
                <table className='w-full'>
                    <thead>
                        <tr>
                            {Title.map((d, i) => (
                                <th className='pt-5'>{d}</th>
                            ))}
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Products.map((d, i) => (
                            <tr key={i}>
                                <td className='border-r border-gray-200 pl-5 text-center'>{d.id}</td>
                                <td className='border-r border-gray-200 pl-5'>{d.Title}</td>
                                <td className='border-r border-gray-200 pl-5'>{d.Price}</td>
                                <td className='border-r border-gray-200 pl-5'>{d.Discounted_Price}</td>
                                <td className='border-r border-gray-200 pl-5'>{d.Discription}</td>

                                <th className='p-2 text-red-500 rounded-xl cursor-pointer hover:transition transform hover:scale-105'
                                    onClick={() => DeleteProduct(d.id)}>Delete</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default Projuct
