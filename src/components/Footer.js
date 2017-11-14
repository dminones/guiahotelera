import React from 'react';

export default function Footer() {
  return(
    <div id="footer" className="dark">
      <div className="container">
        <div className="row">

          <div className="col-md-4 col-sm-6 ">
            <h4>Más Destinos</h4>
            <ul className="footer-links" style={{width:'100%'}}>
              <li><a href="http://www.guiahoteleraargentina.com" target="_blank">Argentina</a></li>
              <li><a href="http://www.guiahotelerachile.com/" target="_blank">Chile</a></li>
              <li><a href="http://www.guiahoteleraparaguay.com/" target="_blank">Paraguay</a></li>
            </ul>
            <div className="clearfix"></div>
          </div>    

          <div className="col-md-4 col-sm-6 ">
            <h4>Enlaces útiles</h4>
            <ul className="footer-links" style={{width:'100%'}}>
               <li><a href="http://www.rentacares.com/" target="_blank">Rentacares</a></li>
              <li><a href="http://www.proveedorhotelero.com.ar/" target="_blank">Productos y Servicios Para Hoteles y Restaurantes
</a></li>
            </ul>
            <div className="clearfix"></div>
          </div> 

          <div className="col-md-4 col-sm-12">
            <h4>Contacto</h4>
            <div className="text-widget">
              Guia Hotelera Bolivia <br/>
              E-Mail: <a href="mailto:info@guiahotelerabolivia.com">info@guiahotelerabolivia.com</a>
            </div>

            <ul className="social-icons margin-top-20">
              <li><a className="facebook" href="https://www.facebook.com/GuiaHoteleraBolivia/"><i className="icon-facebook"></i></a></li>
            </ul>

          </div>

        </div>
        
        <div className="row">
          <div className="col-md-12">
            <div className="copyrights">© 2008 guiahotelerabolivia.com All rights reserved</div>
          </div>
        </div>

      </div>

    </div>
  )
}
