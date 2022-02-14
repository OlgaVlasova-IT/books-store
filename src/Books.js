import cancelIcon from './cancel.png'


function Books({propBooks, propShowMore, propFunction, propSortHighToLow, 
           propSortLowToHigh, propSortAZ, propSortZA, propAddToCart,
            propCartList, propDeleteItem }) {
 
 


    return(

        <div className="App">
       
        <div className='booksCatalog'>
        <h4>Explore our selection of {propBooks.length} books</h4>
        <div className="sortCont"> 
         
          <button 
          className="btnSort"
          onClick={()=>{propSortLowToHigh(propBooks)}}
          >Price: Low-High</button>
          <button className="btnSort"
          onClick={()=>{propSortHighToLow(propBooks)}}
           >Price: High-Low</button>

         <button className="btnSort"
          onClick={()=>{propSortAZ(propBooks)}}
           >Title: A-Z</button>
           <button className="btnSort"
          onClick={()=>{propSortZA(propBooks)}}
           >Title: Z-A</button>
        </div> 
        <div id= "cart"className="cart">
         
       {propCartList.map( book => {
       const {id, bookname, price , image} =book;
       return(
         <div key={id}>
        <div  className='liCont'>
        <img src={image} alt="book cover" width="48px" height="auto"></img>
        <div className='additionalCont'>
        <div className="titleCont">
          <p>{bookname}</p>
         
        </div>
        <div className="priceCont">
        <p>${price}</p>
        </div>
        </div>
        <button className="btnCancel" onClick={()=>{propDeleteItem(id)}} ><img src={cancelIcon} alt="delete Icon" width="15px" height="15px"/></button>
    </div>
   
    </div>
       )})}
        {/* <div className='totalCont'>
      Total: $ {propTotal}
    </div> */}
</div>

        {propBooks.map( book => {
          const {id, bookname , author, price, desc, image, searchTerm} = book;
          return(
            <div  key={id} className='card'>
            <div className="upperBlock">
            <div className='imgCont'>
            <img src={image} width="200px" alt ="baby book cover"/>
            </div>
            <div className="detailsCont">
             <h3>{bookname}</h3>
             <p> by <span className="author">{author}</span></p> 
             <p>category:<span className="author">{searchTerm}</span></p>
             <p className="price">  ${price}</p>
             {/* <button>Like</button> */}
             <button className="btnAddToCart" onClick={()=>{propAddToCart(id)}}>ADD TO CART</button>
             </div>
             </div>
             <div className="descCont">
             <p className="desc">{propShowMore[id-1] ? desc : desc.substring(0, 100)+"..."} 
             <button className='showMoreBtn' onClick={()=>{propFunction(id)}}>{propShowMore[id-1] ? "Show Less" : "Show More"}</button></p>
             </div>
            </div>
           
          )
        })}
        
        
      </div>
      </div>



    )
}

export default Books;