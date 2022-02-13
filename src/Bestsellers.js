import { useState } from 'react';
import { data1 } from './data1' 
import Carousel from './Carousel';

function Bestsellers() {
const [booksList] = useState(data1) ;
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

const temp1 = booksList.filter(filterBestsellerBabiesToddlers)
const temp2 = booksList.filter(filterBestsellerKids)
const [bestsellersBabiesToddlers] = useState(temp1);
const [bestsellersKids] = useState(temp2);

return(<div className='booksCatalog'>
     <h2  className='heading'>Our bestseller for Babies and Toddlers</h2> 
    <Carousel   propBestsellers={bestsellersBabiesToddlers}/> 
    <h2 className="heading">Our bestseller  for kids 5-12 years</h2>
    <Carousel   propBestsellers={bestsellersKids}/>
    </div>
)
}
export default Bestsellers;