import React from 'react';
import config from '../config/'

const otherSites = [
  { 
    name: "Argentina",
    href: "http://www.guiahoteleraargentina.com"
  },
  { 
    name: "Chile",
    href: "http://www.guiahotelerachile.com"
  },
  { 
    name: "Bolivia",
    href: "http://www.guiahotelerabolivia.com"
  },
  { 
    name: "Paraguay",
    href: "http://www.guiahoteleraparaguay.com"
  },
]

export default function Footer() {
  return(
    <div id="footer" className="dark">
      <div className="container">
        <div className="row">

          <div className="col-md-4 col-sm-6 ">
            <h4>Más Destinos</h4>
            <ul className="footer-links" style={{width:'100%'}}>
              { 
                otherSites.map( (item) => {
                  if(item.name !== config.site.country)
                    return (<li key={item.name} ><a href={item.href} target="_blank">{item.name}</a></li>)
                }) 
              }
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
              {config.site.name} <br/>
              E-Mail: <a href={`mailto:${config.site.email}`}>{config.site.email}</a>
            </div>

            <ul className="social-icons margin-top-20">
              <li><a className="facebook" href={config.site.facebook}><i className="icon-facebook"></i></a></li>
            </ul>

          </div>

        </div>
        
        <div className="row">
          <div className="col-md-12">
            <div className="copyrights">{config.site.trademark}</div>
          </div>
        </div>

      </div>

    </div>
  )
}
