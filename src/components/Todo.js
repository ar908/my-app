import React from "react"
const  Todo =()=>{
    return(
    <>
 <div className="main-div">
    <div className="child-div">
        <figure className="book">
            <img src ="https://purepng.com/public/uploads/large/purepng.com-booksbookillustratedwrittenprintedliteratureclipart-1421526451843dou0k.png" alt="book" />
            <figcaption>Add Your List Here </figcaption>
        </figure>
        <div  className="addItems">
            <input type="text" placeholder="Add Items.." >
                {/* <i className="fas fa-plus"></i> */}
            
            </input>
        </div>

    </div>

    <i class="fas fa-cloud"></i>

 </div>
    </>   
    )
}
 export default Todo;  