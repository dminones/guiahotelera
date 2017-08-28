import React from 'react';
import './Components.css';

export default function Filtering() {
  const categorias = ["Hoteles 5*", "Hoteles 4*","Hoteles 3*","Hoteles 2*","Hoteles 1*","Hostaria","Hostel"]
  return(
    <div className="margin-bottom-30">
      <h3 className="margin-top-0 margin-bottom-30">Filtrar</h3>

      <div className="row with-forms">
        <div className="col-md-12">
          <input type="text" placeholder="What are you looking for?" value=""/>
        </div>
      </div>

      <div className="row with-forms">
        <div className="col-md-12">
          <select data-placeholder="Categoria" className="chosen-select" >
            <option>Categoria</option>
            { categorias.map(function(item) {
                return  (<option key={item}>{item}</option>)
              })
            }
          </select>
        </div>
      </div>

      <button className="button fullwidth margin-top-25">Update</button>
      
    </div>
  )
}