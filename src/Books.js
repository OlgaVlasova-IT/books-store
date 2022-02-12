function Books({propBooks, propShowMore, propFunction}) {
 
 
    return(

        <div className="App">
       
        <div className='booksCatalog'>
        <h4>Explore our selection of {propBooks.length} books</h4>
        {propBooks.map( book => {
          const {id, bookname , author, price, desc, image} = book;
          return(
            <div  key={id} className='card'>
            <div className="upperBlock">
            <div className='imgCont'>
            <img src={image} width="200px" alt ="baby book cover"/>
            </div>
            <div className="detailsCont">
             <h3>{bookname}</h3>
             <p> by <span className="author">{author}</span></p> 
             <p className="price">  ${price}</p>
             <button>Like</button>
             <button>Add to cart</button>
             </div>
             </div>
             <div className="descCont">
             <p>{propShowMore[id-1] ? desc : desc.substring(0, 100)+"..."} 
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