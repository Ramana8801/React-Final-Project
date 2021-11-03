import React,{useState, useEffect} from 'react'
import firebase from 'firebase'
import"../../css/Nav.css"

 
function Nav() {
   const[show, handleShow] =useState(false);
 const transitionNavbar=()=>{
         if(window.scrollY>100)
         {
             handleShow(true)
         }else{
                          handleShow(false)
         }
 }
  useEffect(() => {
      window.addEventListener("scroll", transitionNavbar)
     return ()=>{
          window.removeEventListener("scroll", transitionNavbar)
      }
     
  }, [])
    return (
        
            <div className={`nav ${show && "nav_black"}`}>
           <div className="nav_content">
               {/* adding logos in top of the homepage*/}
               <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" className="logo"/>
               <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
               onClick={()=>firebase.auth().signOut()} className="nav_avatar"/>
               {/*giving function for signout in 2nd logo*/}
               </div> 
        </div>
    )
}

export default Nav
