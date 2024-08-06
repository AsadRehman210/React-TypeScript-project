import React, { useEffect, useState } from 'react';
import Card from '../components/Card.tsx';
import axios from 'axios';
import { Cards } from '../Types/Types.ts';
import Pagination from '../components/Pagination.tsx';
import Preloader from '../components/Preloader.tsx';

const Home: React.FC = () => {
  const [loader, setLoader] = useState(true);
  const [cardData, setCardData] = useState<Cards[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const cardsPerPage = 15;
  console.log(totalPages)

  const getData = async (page: number) => {
    setLoader(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: page,
          _limit: cardsPerPage,
        },
      });
      console.log(response.headers)

      const totalItems = parseInt(response.headers['x-total-count'], 10);
      setTotalPages(Math.ceil(totalItems / cardsPerPage))

      const res = await response.data
      setCardData(res);
      setLoader(false);
    } catch (error) {
      console.log(`Error ${error}`);
      setLoader(false);
    }
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  // On Change Page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // PreLoader rendering
  if (loader) {
    return <Preloader />;
  }

  return (
    <main>
      <div className='container mx-auto flex flex-col min-h-screen'>
        <h1 className='text-center mt-5 text-blue-700 text-4xl'>Welcome to Home Page</h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-x-6 gap-y-16 my-8 px-4 auto-rows-auto'>
          {cardData.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              body={data.body}
            />
          ))}
        </div>

        <Pagination
          CurrentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default Home;
