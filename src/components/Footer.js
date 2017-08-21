import React from 'react';

export default function Footer() {
  return(
    <div id="footer" className="dark">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-6">
            <img className="footer-logo" src="images/logo2.png" alt="" />
            <br/><br/>
            <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
          </div>

          <div className="col-md-4 col-sm-6 ">
            <h4>Enlaces útiles</h4>
            <ul className="footer-links">
              <li><a href="index-4.html#">Login</a></li>
              <li><a href="index-4.html#">Sign Up</a></li>
              <li><a href="index-4.html#">My Account</a></li>
              <li><a href="index-4.html#">Add Listing</a></li>
              <li><a href="index-4.html#">Pricing</a></li>
              <li><a href="index-4.html#">Privacy Policy</a></li>
            </ul>

            <ul className="footer-links">
              <li><a href="index-4.html#">FAQ</a></li>
              <li><a href="index-4.html#">Blog</a></li>
              <li><a href="index-4.html#">Our Partners</a></li>
              <li><a href="index-4.html#">How It Works</a></li>
              <li><a href="index-4.html#">Contact</a></li>
            </ul>
            <div className="clearfix"></div>
          </div>    

          <div className="col-md-3  col-sm-12">
            <h4>Contacto</h4>
            <div className="text-widget">
              <span>12345 Little Lonsdale St, Melbourne</span> <br/>
              Phone: <span>(123) 123-456 </span><br/>
              E-Mail: <a href="mailto:info@guiahoteleraargentina.com">info@guiahoteleraargentina.com</a>
            </div>

            <ul className="social-icons margin-top-20">
              <li><a className="facebook" href="index-4.html#"><i className="icon-facebook"></i></a></li>
              <li><a className="twitter" href="index-4.html#"><i className="icon-twitter"></i></a></li>
              <li><a className="gplus" href="index-4.html#"><i className="icon-gplus"></i></a></li>
              <li><a className="vimeo" href="index-4.html#"><i className="icon-vimeo"></i></a></li>
            </ul>

          </div>

        </div>
        
        <div className="row">
          <div className="col-md-12">
            <div className="copyrights">© 2017 Listeo. All Rights Reserved.</div>
          </div>
        </div>

      </div>

    </div>
  )
}
