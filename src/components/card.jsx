export default Card=()=>{
return(
    <>
            <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-6.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Eco-friendly furniture</h5>
                        <p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                        <p>The best curved wood furniture for best home decor</p>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    </>
)
};