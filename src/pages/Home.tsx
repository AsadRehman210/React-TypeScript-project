import React, { useEffect, useState } from 'react'
import Card from '../components/Card.tsx'
import axios from "axios";
import { Cards } from '../Types/Types.ts';
import Pagination from '../components/Pagination.tsx';


const Home: React.FC = () => {
  const [cardData, setCardData] = useState<Cards[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(15);


  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const res = await response.data;
      setCardData(res);

    } catch (error) {
      console.log(`Error ${error}`)

    }

  }
  useEffect(() => {
    getData()
    // console.log("welcome to Home page")
  }, [])


  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // On Change Page
  const Paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    console.log(pageNumber)

  }

  return (
    <main>
      <div className='container mx-auto'>
        <h1 className='text-center mt-5 text-blue-700 text-4xl'>Welcome to Home Page</h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-6 gap-y-16 my-8 px-4 auto-rows-auto'>
          {currentCards.map((data, index) => {
            return (
              <Card
                key={data.id}
                id={data.id}
                title={data.title}
                body={data.body}
              />

            )
          })}

        </div>
        <Pagination
          CurrentPage={currentPage}
          totalPages={Math.ceil(cardData.length / cardsPerPage)}
          onPageChange={Paginate}
        />
      </div>
    </main>
  )
}

export default Home
