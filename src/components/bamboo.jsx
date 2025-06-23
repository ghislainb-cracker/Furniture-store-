import React from "react";
export default function Bamboo(){
    
    return(

        <>
                 <section className="container mt-5 overflow-x-scroll flex align-items-center"  id="wholeBamboo">
             <div className="bamboo-collection d-lg-flex gap-3 justify-content-center">
                <div className="bamboo text-light  " >
                    <img src="../src/assets/furniture/arrival-7.jpg" className="rounded-3" style={{width:"240px", height:"140px",objectFit: "cover"}} alt="" />
                </div>
                <div className="bamboo text-light  " >
                    <img src="../src/assets/furniture/head-1.jpg" className="rounded-3" style={{width:"240px", height:"140px",objectFit: "cover"}} alt="" />
                </div>
                <div className="bamboo text-light  " >
                    <img src="../src/assets/furniture/head-2.jpg" className="rounded-3" style={{width:"240px", height:"140px",objectFit: "cover"}}  alt="" />
                </div>
                <div className="bamboo text-light  " >
                    <img src="../src/assets/furniture/head-3.jpg" className="rounded-3" style={{width:"240px", height:"140px",objectFit: "cover"}} alt="" />
                </div>
                <div className="bamboo text-light  " >
                    <img src="../src/assets/furniture/head-4.jpg" className="rounded-3" style={{width:"240px", height:"140px",objectFit: "cover"}} alt="" />
                </div>
                <div className="bamboo text-light  " >
                    <img src="../src/assets/furniture/head-4.jpg" className="rounded-3" style={{width:"240px", height:"140px",objectFit: "cover"}} alt="" />
                </div>
                <div className="bamboo text-light  " >
                    <img src="../src/assets/furniture/head-4.jpg" className="rounded-3" style={{width:"240px", height:"140px",objectFit: "cover"}} alt="" />
                </div>
             </div>
             <div id="scroll" className="rounded-pill bg-primary  position-absolute flex justify-content-center align-items-center" style={{height:"40px", width: "40px", right: 30, cursor: "pointer"}} >
                  <img src="../src/assets/furniture/chevron-right-solid.svg" alt="" style={{width: "30px", height: "30px"}}/>
             </div>
         </section>
        </>
    )
}

