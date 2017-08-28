import React from 'react';

export default function Footer() {
  return(
    <div id="footer" className="dark">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-6">
            <img className="footer-logo" src="images/logo2.png" alt="" />
            <br/><br/>
            <p>Guía de Hoteles contenido; Hoteles, Apart Hoteles, Hotel Boutique, Hotel Gremial, (Sindical), Hosterías, Cabañas, Hostels, Spa, Sala de Eventos, Salones, Residenciales, Apartamentos Temporarios, Oficinas, Restaurantes, Show de Tango, Alquiler de Autos, Agencias de Viajes y Turismo, Líneas Aéreas, Rent a Car, Transportes Terrestre, (micro ómnibus) Transporte Fluvial en; Ciudad Autónoma (Capital Federal), Buenos Aires, Córdoba, La Rioja, Mendoza, San Juan, San Luís, Chaco, Corrientes, Formosa, Entre Ríos, Misiones, Santa Fe, Jujuy, Catamarca, Salta, Santiago del Estero, Tucumán, Chubut, La Pampa, Neuquén, Río Negro, Santa Cruz, Tierra del Fuego, Hotel en otros países; Argentina, Bolivia, Chile, Paraguay, Uruguay</p>
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
              <span>Nahuel Huapi 4910, Buenos Aires, Argentina</span> <br/>
              Phone: <span>(123) 123-456</span><br/>
              E-Mail: <a href="mailto:info@guiahoteleraargentina.com">info@guiahoteleraargentina.com</a>
            </div>

            <ul className="social-icons margin-top-20">
              <li><a className="facebook" href="index-4.html#"><i className="icon-facebook"></i></a></li>
              <li><a className="twitter" href="index-4.html#"><i className="icon-twitter"></i></a></li>
            </ul>

          </div>

        </div>
        
        <div className="row">
          <div className="col-md-12">
            <div className="copyrights">© 2008 guiahoteleraargentina.com All rights reserved</div>
          </div>
        </div>

      </div>

    </div>
  )
}
