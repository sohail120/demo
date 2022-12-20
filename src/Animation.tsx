import React, { useState } from 'react'
import './Sample.css'


function Animation() {

    const [set,setv]=useState("page")
  return (
    <div className="html">
    <div className="body">
      <div className="book">
        <div id="pages" className="pages"  >
        <div className={"flipped"} onClick={()=>setv("flipped")} >
        {/* className={"page" : "flipped page"} */}
        <div  className={set}  />
        <div  className="page" />
        <div  className="page" />
        <div  className="page" />

        </div>
         
        </div>
      </div>
    </div>
   </div>
  )
}

export default Animation