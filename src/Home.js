import Filters from "./Filters";
import { useState } from 'react';
import { data } from './data' 
import Books from "./Books"
import Bestsellers from "./Bestsellers";


function Home() {
//array of Books
const [books, setBooks] = useState(data);
const [booksNoFilter, setBooksNoFilter] = useState(data);
//array of variables to display short/full description of the book
const [showMore, setShowMore] = useState(new Array(books.length).fill(false))


const filterByAge = (input) => {

    setBooks(data);
    let temp = [...booksNoFilter];
    temp = temp.filter(book => book.searchTerm.includes(input))
    setBooks(temp);

}
//function to update the value of showMore[id-1] to the opposite (true/false)
const handleShowMore = (id) => {
    let temp = [...showMore];
    temp[id - 1] = !temp[id - 1];
    setShowMore(temp);
}
const handleClearMore = () =>{
  
    setBooks(data);
}

return(
    <div>
        <Filters propFilter={filterByAge} propClearAll ={handleClearMore}/>
        {/* <Bestsellers /> */}
        <Books propBooks={books} propShowMore={showMore} propFunction={handleShowMore} />
    </div>
)}

export default Home;