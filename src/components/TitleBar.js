import React from 'react';

function BreadCrumbs () {
  return(
    <nav id="breadcrumbs">
      <ul>
        <li><a href="listings-list-with-sidebar.html#">Home</a></li>
        <li>Listings</li>
      </ul>
    </nav>
  )
}

export default function TitleBar ({ destination }) {
  return (
    <div id="titlebar" className="gradient">
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <h2>Alojamientos en { destination } </h2><span>Grid Layout With Sidebar</span>
            <BreadCrumbs />

          </div>
        </div>
      </div>
    </div>
  )
}