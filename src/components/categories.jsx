import React from "react";

export default function CategoriesSection(props){
    return(
        <>
        <section className='p-5' data-aos="fade-right">
      <div className="container">
        <div className="row text-center g-4 text-white">
          <h1>Categories</h1>
                {props.category.map(category => {
                  // console.log(category.description)
                  return (
                  <div className="col-md cat-opacity" key={category.id}>
                  <div className="card dark8 cat-opacity2">
                  <div className="card-body text-center">
                  <h6 className="h6" key={category.id}>{category.description}</h6>
                  <img 
                  src={category.image} 
                  alt=""
                  className='img-fluid'
                  style={{width: '50px', height: '40px', objectFit: 'cover'}}
                   />
                  </div>
                  </div>
                  </div>
                )  
                })}
                {/* <div className="h6">Sofas</div>
                <img 
                src="" 
                alt="" 
                className='img-fluid' 
                style={{width: '48px'}}
                /> */}
        </div>
      </div>
     </section>
     </>
    )
}