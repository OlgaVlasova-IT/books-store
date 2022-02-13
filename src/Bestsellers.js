import { useState } from 'react';
import { data } from './data' 
import Carousel from './Carousel';

function Bestsellers() {
    const [books, setBooks] = useState(data);
let i = 0;
const filterBestsellerBabiesToddlers = (item) =>{
  if (item.searchTerm.includes("bestseller") && (item.searchTerm.includes("0-2")|| item.searchTerm.includes("2-5")  )){
   item.id= i+1;
   i++;
   return item
  }
}
let j = 0;
const filterBestsellerKids = (item) =>{
    if (item.searchTerm.includes("bestseller") && (item.searchTerm.includes("5-8")|| item.searchTerm.includes("8-12")  )){
     item.id= j+1;
     j++;
     return item
    }
  }

const temp1 = books.filter(filterBestsellerBabiesToddlers)
const temp2 = books.filter(filterBestsellerKids)
const [bestsellersBabiesToddlers] = useState(temp1);
const [bestsellersKids] = useState(temp2);

return(<div className='bestCont'>
     <h2>Our bestseller for Babies and Toddlers</h2> 
    <Carousel   propBestsellers={bestsellersBabiesToddlers}/> 
    <h2>Our bestseller  for kids 5-12 years</h2>
    <Carousel   propBestsellers={bestsellersKids}/>
    </div>
)
}
export default Bestsellers;