import React from 'react'

const Footer = () => {
  return (
    <div className='footer p-3 mt-5'>
          <div className="container p-3">
        <div className="row">
          <div className=" col-md-3 ">
            <h4 className='fw-bold'> Products</h4>
            <ul className="list-unstyled">
              <li><a href="#">Phones </a></li>
              <li><a href="#">Laptops</a></li>
              <li><a href="#">Accesories</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className='fw-bold'>Info</h4>
            <ul className="list-unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className='fw-bold'>Enquire</h4>
            <ul className="list-unstyled">
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Hiring</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className='fw-bold'>Column 4</h4>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer