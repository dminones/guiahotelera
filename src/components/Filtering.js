import React from 'react';

export default function Filtering() {
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
          <select data-placeholder="All Categories" className="chosen-select" >
            <option>Hotel 5*</option> 
            <option>Hotel 4*</option>
            <option>Hotel 3*</option>
            <option>Hotel 2*</option>
            <option>Hotel 1*</option>
            <option>Hosteria</option>
            <option>Hostel</option>
          </select>
        </div>
      </div>
      <button className="button fullwidth margin-top-25">Update</button>
    </div>
  )
}