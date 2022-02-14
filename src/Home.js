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

const [cartList, setCartList] =useState([])
// const [total, setTotal] = useState(0);

  

const addToCart = (id) =>{
 const x = document.getElementById('cart');
    if (x.style.display === "none") {
      x.style.display = "block";
    }

    if (!cartList.find( element => element.id === id)){
    let temp = [...cartList];

    books.forEach( item=> {
        
      if (item.id === id ) {
        const bookToAdd = {...item};
        temp.push(bookToAdd)
      }
    
     })

    setCartList(temp);
    }

 }
    
const deleteItem = (id) => {

  const temp = cartList.filter(element => element.id !== id)
  //update WatchList
  setCartList(temp);

  if (cartList.length === 1) {
     const divCart= document.getElementById("cart");
     divCart.style.display="none";
  }
    
  }

const filterByAge = (input) => {

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
const handleClearAll = () =>{
  
   setBooks(data);
}

const sortLowToHigh = (arr) => {

    
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
    <div className="App" >
        <div className="headingCont">
        <h4 >Explore our selection of {books.length} books</h4>
        </div>
        <Filters propFilter={filterByAge} propClearAll ={handleClearAll}/>
      <Books
    propBooks={books}
    propShowMore={showMore}
    propFunction={handleShowMore}
    propSortHighToLow={sortHighToLow}
    propSortLowToHigh={sortLowToHigh}
    propSortAZ ={sortAZ}
    propSortZA ={sortZA}
    propAddToCart={addToCart}
    propCartList ={cartList}
    propDeleteItem={deleteItem}
   />
    </div>
)

}

export default Home;