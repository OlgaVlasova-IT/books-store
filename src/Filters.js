function Filters({propFilter, propClearAll}) {

    return(
        <div className="filterRootCont">
        <div className="filterCont">
 <button className="filterBtn" onClick={(e)=> {propFilter("0-2")}}>Babies</button>
 <button className="filterBtn" onClick={()=> {propFilter("2-5")}}>Toddlers</button>
 <button className="filterBtn" onClick={()=> {propFilter("5-8")}}>Kids (5-8)</button>
 <button  className="filterBtn"onClick={()=> {propFilter("8-12")}}>Kids (8-12)</button>
 <button className="filterBtn" onClick={()=> {propFilter("12+")}}>Teens (12+)</button>
 <button className="filterBtn" onClick={()=>{propClearAll()}}>Clear All</button>

        </div>
        </div>
    )

}

export default  Filters;