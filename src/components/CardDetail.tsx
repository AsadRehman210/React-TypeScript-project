import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Cards } from '../Types/Types'

const CardDetail = () => {
    const [idData, setIdData] = useState<Cards>({
        userId: "",
        id: "",
        title: "",
        body: ""
    })
    const { id } = useParams();


    const getIndividualData = useCallback(async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const res = await response.data
            setIdData(res)

        } catch (error) {
            console.log(`Error ${error}`)

        }

    }, [id])
    useEffect(() => {
        getIndividualData();
        // console.log("welcome to individual card Detail")
    }, [getIndividualData]);

    return (
        <div className='container mx-auto px-4 my-5'>
            <div className='mt-8'>
                <NavLink to="/home" type='button' className='py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer outline-none'>Back</NavLink>
                <div className="bg-white m-auto text-capitalize shadow-lg rounded-md p-6 mt-5" style={{ maxWidth: "60rem" }}>
                    <div className="card-body">
                        <h3 className="capitalize text-xl font-semibold">{idData.title}</h3>
                        <p className="capitalize text-base text-justify py-4">{idData.body}</p>
                        <div className='flex justify-between text-blue-800  text-md font-semibold'>
                            <p>UserId: {idData.userId}</p>
                            <p>Id: {idData.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail
