import Filters from "./Filters";
import { useState } from 'react';
import { data } from './data' 
import Books from "./Books"


function Home() {
//array of Books
const [books, setBooks] = useState(data);
const [booksNoFilter] =useState(data);
//array of variables to display short/full description of the book
const [showMore, setShowMore] = useState(new Array(books.length).fill(false))


const filterByAge = (input) => {
    let temp = [...booksNoFilter];
    temp = temp.filter(book => book.searchTerm.includes(input))
    setBooks(temp);
}
console.log(books)
//function to update the value of showMore[id-1] to the opposite (true/false)
const handleShowMore = (id) => {
    let temp = [...showMore];
    temp[id - 1] = !temp[id - 1];
    setShowMore(temp);
}
const handleClearAll = () =>{
  
   setBooks(data);
}

const sortLowToHigh = (arr) => {
    console.log(arr)
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
    
            if (arr[j].price > arr[j + 1].price) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    let temp = [...arr];
    setBooks(temp)
}

const sortHighToLow = (arr) => {
  console.log(arr)
    
   for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length-1; j++) {
           if (arr[j].price < arr[j + 1].price) {
               let tmp = arr[j];
               arr[j] = arr[j + 1];
               arr[j + 1] = tmp;
           }
       }
   }
   let temp = [...arr];
   setBooks(temp)
}
 
const sortAZ = (arr) => {

      
     for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < arr.length-1; j++) {
             if (arr[j].bookname.toLowerCase() > arr[j + 1].bookname.toLowerCase()) {
                 let tmp = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j + 1] = tmp;
             }
         }
     }
     let temp = [...arr];
     setBooks(temp)
  }

  const sortZA = (arr) => {
 
     for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < arr.length-1; j++) {
             if (arr[j].bookname.toLowerCase() < arr[j + 1].bookname.toLowerCase()) {
                 let tmp = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j + 1] = tmp;
             }
         }
     }
     let temp = [...arr];
     setBooks(temp)
  }

return(
    <div>
        <Filters propFilter={filterByAge} propClearAll ={handleClearAll}/>
      <Books
    propBooks={books}
    propShowMore={showMore}
    propFunction={handleShowMore}
    propSortHighToLow={sortHighToLow}
    propSortLowToHigh={sortLowToHigh}
    propSortAZ ={sortAZ}
    propSortZA ={sortZA}
   />
    </div>
)}

export default Home;