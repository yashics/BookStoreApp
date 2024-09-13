import React, {  useEffect, useState } from 'react'
import Cards from "../components/Cards"
import {Link} from "react-router-dom"
import axios from 'axios'

function Course() {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
    try {
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data)
      setBook(res.data)
    } catch (error) {
      console.log(error)
    }
  };


getBook();
  },[])
  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white'>
        <div className=' items-center justify-center text-center'>
          <h1 className='pt-28 text-2xl md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'> Here ....</span>
          </h1>
          <p className='mt-12'>
            You'll find a carefully curated selection of books, from timeless classics to contemporary bestsellers, ensuring there's something for every reader.
            Whether you're a passionate bibliophile or just discovering the joys of reading, our store offers a cozy atmosphere to explore new worlds and ideas.
            We are committed to providing personalized recommendations and creating a welcoming space where books and people connect
            . Come and experience the magic of reading with us!
          </p>
        <Link to="/">
        <button className=' bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6' >
            Back
          </button>
        
        </Link>

        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
              book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>


      </div>

    </>

  )
}

export default Course
