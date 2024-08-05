import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/Card.tsx'
import axios from "axios";
import { Cards } from '../Types/Types.ts';
import Pagination from '../components/Pagination.tsx';
import Preloader from '../components/Preloader.tsx';


const Home: React.FC = () => {
  const [loader, setLoader] = useState(true)
  const [cardData, setCardData] = useState<Cards[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = useRef(15);


  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const res = await response.data;
      setCardData(res);
      setLoader(false)

    } catch (error) {
      console.log(`Error ${error}`)
      setLoader(false)

    }

  }
  useEffect(() => {
    getData()
    // console.log("welcome to Home page")
  }, [])


  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage.current;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage.current;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // On Change Page
  const Paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    console.log(pageNumber)

  }
  // PreLoader rendering
  if (loader) {
    return <Preloader />;
  }

  return (
    <main >
      <div className='container mx-auto flex flex-col min-h-screen'>
        <h1 className='text-center mt-5 text-blue-700 text-4xl'>Welcome to Home Page</h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-x-6 gap-y-16 my-8 px-4 auto-rows-auto'>
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
          totalPages={Math.ceil(cardData.length / cardsPerPage.current)}
          onPageChange={Paginate}
        />
      </div>
    </main>
  )
}

export default Home
