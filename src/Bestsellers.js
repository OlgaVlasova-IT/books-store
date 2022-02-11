import { useState } from 'react';
import { data } from './data' 


function Bestsellers() {
const [books, setBooks] = useState(data);
let i = 0;
const [start, setStart]= useState(0);
const [display, setDisplay]= useState(3);
const filterChangeId = (item) =>{
  if (item.searchTerm.includes("bestseller")){
   item.id= i+1;
   i++;
   return item
  }
}
const handleNext = () => {

    // let temp = input+display
    // // console.log(temp)
    // // setStart(3);

    let tempStart = start + display;
    console.log("tempStart" + tempStart);
    
    setStart(tempStart);
    console.log(start);
//     for (let i=start ; i <= start+display ; i ++)  {
//    console.log("loop")
//    console.log(i, start, display + start)
   
//          const temp=[];
//          temp.push(bestsellers[i])
//          console.log(temp)
         
        
//     }

//     setFilteredBest(temp);
}
const temp = books.filter(filterChangeId)
const [bestsellers, setBestsellers] = useState(temp);
// const [filteredBest, setFilteredBest] = useState(bestsellers.filter(item=> (item.id > start && item.id <= start+display)))
// console.log("filtered array ", filteredBest);
console.log("start ", start);
console.log("start +display ", start +display);
console.log(bestsellers)
// console.log(filteredBest)
// const [booksNoFilter, setBooksNoFilter] = useState(data);

// // array of variables to display short/full description of the book
// const [showMore, setShowMore] = useState(new Array(books.length).fill(false))



console.log(start)
    return(
     
        <div>
            <div className='bestsellersCont'>
                <button>Prev</button>
              
                {bestsellers.map( book => {

                const  { id, bookname, image, author, desc, price } = book;
                
            
                if (id >= start+1 && id <= start +display) {
                // if  (searchTerm.includes("bestseller"))  {
                return(
                   <div  key="id" className='cardBestseller'>
                    <img src={image} height="100px"></img>
                    <p>{bookname}</p>
                    <p >by <span className='author'>{author}</span></p>
                    <p className='price'>$ {price}</p>
                    <button > Add to Cart</button>
                   </div>
                )
                } else 
                return(
                    <div key="id" className="noDisplay"> </div>
                )
            })}
                

                <button onClick={() => {handleNext()}}>Next</button>
            </div>

     
        </div>
    )
}
export default Bestsellers;