import { useState } from 'react';
import { data } from './data' 


function Bestsellers() {
const [books, setBooks] = useState(data);
let i = 0;
const [start, setStart]= useState(0);
const [display, setDisplay]= useState(2);
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
    setStart(tempStart);
   
    }
}

const handlePrev = (inputNumber) => {
    if (inputNumber <= 0) {
       
        let tempStart = bestsellers.length -display;
        setStart(tempStart);

    }else{
        let tempStart = start-display;
        setStart(tempStart);
    }


}
const temp = books.filter(filterChangeId)
const [bestsellers, setBestsellers] = useState(temp);

    return(
        <div className='booksCatalog'>
            <h2>Our bestseller</h2>

        <div className='bestsellersMainCont'>
            
            <div className='bestsellersCont'>
                <button onClick={()=>{handlePrev(start)}}>Prev</button>
              
                {bestsellers.map( book => {

                const  { id, bookname, image, author, desc, price } = book;
                
            
                if (id >= start+1 && id <= start +display) {
                return(
                   <div  key={id} className='cardBestseller'>
                      <div className='img'>
                    <img src={image} height="100px"></img>
                    </div> 
                    <div className='bookNameCont'>
                    <p>{bookname}</p>
                    </div>
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
        </div>
    )
}
export default Bestsellers;