

function Books({propBooks, propShowMore, propFunction, propSortHighToLow, propSortLowToHigh, propSortAZ, propSortZA}) {

 
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
             <button className="btnAddToCart">ADD TO CART</button>
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