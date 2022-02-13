import { useState } from "react"

function Carousel({propBestsellers}) {
    const [start, setStart]= useState(0);
const [display]= useState(3);
    const handleNext = (inputNumber) => {
        if (inputNumber >= propBestsellers.length) {
    
            let tempStart = 0;
            setStart(tempStart);
        } else{
    
        let tempStart = start + display;
        setStart(tempStart);
       
        }
    }
    
    const handlePrev = (inputNumber) => {
        if (inputNumber <= 0) {
           
            let tempStart = propBestsellers.length -display;
            setStart(tempStart);
    
        }else{
            let tempStart = start-display;
            setStart(tempStart);
        }
    
    
    }



return(
    <div className='booksCatalog'>
      
    <div className='bestsellersMainCont'>
        
        <div className='bestsellersCont'>
            <button onClick={()=>{handlePrev(start)}}>Prev</button>
          
            {propBestsellers.map( book => {

            const  { id, bookname, image, author, desc, price, searchTerm } = book;
            
        
            if (id >= start+1 && id <= start +display) {
            return(
               <div  key={id} className='cardBestseller'>
                  <div className='img'>
                <img src={image} width="120px"></img>
                </div> 
                <div className='bookNameCont'>
                <p>{bookname}</p>
                </div>
                <p >by <span className='author'>{author}</span></p>
                <p className="author">{searchTerm}</p>
                <p className='price'>$ {price}</p>
                <button className="btnAddToCart" > Add to Cart</button>
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
export default Carousel;