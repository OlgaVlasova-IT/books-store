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
const handleNext = (inputNumber) => {
    if (inputNumber >= bestsellers.length) {

        let tempStart = 0;
        setStart(tempStart);
    } else{

    let tempStart = start + display;
    console.log("tempStart" + tempStart);

    setStart(tempStart);
    console.log(start);
    }
}

const handlePrev = (inputNumber) => {
    if (inputNumber <= 0) {
        // console.log("bracn if")
        // console.log("input Number" , inputNumber)
        
        let tempStart = bestsellers.length -display;
        // console.log("tempStart", tempStart)
        setStart(tempStart);
        // console.log("tempStart" + tempStart);

    }else{
        let tempStart = start-display;
        setStart(tempStart);
        // console.log("tempStart" + tempStart);


    }


}
const temp = books.filter(filterChangeId)
const [bestsellers, setBestsellers] = useState(temp);
// console.log("start ", start);
// console.log("start +display ", start );
console.log(bestsellers)
// console.log(start)
    return(
     
        <div className='bestsellersMainCont'>
            <div className='bestsellersCont'>
                <button onClick={()=>{handlePrev(start)}}>Prev</button>
              
                {bestsellers.map( book => {

                const  { id, bookname, image, author, desc, price } = book;
                
            
                if (id >= start+1 && id <= start +display) {
                // if  (searchTerm.includes("bestseller"))  {
                return(
                   <div  key={id} className='cardBestseller'>
                    <img src={image} height="100px"></img>
                    <p>{bookname}</p>
                    <p >by <span className='author'>{author}</span></p>
                    <p className='price'>$ {price}</p>
                    <button > Add to Cart</button>
                   </div>
                )
                } else 
                return(
                    <div key={id+100} className="noDisplay"> </div>
                )
            })}
                

                <button onClick={() => {handleNext(start+display)}}>Next</button>
            </div>

     
        </div>
    )
}
export default Bestsellers;