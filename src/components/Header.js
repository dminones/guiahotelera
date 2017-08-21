import React from 'react';

export default function Header({ src, title }) {
  const headerStyle = {   margin:'0px auto',
                          backgroundColor:'transparent',
                          padding:'0px', 
                          height: '300px',
                          overflow: 'hidden',
                          position: 'relative',
                          backgroundImage: 'url('+src+')',
                          backgroundAttachment: 'fixed',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover'
  }

  const contentStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '6',
    textAlign: 'center'
  }

  const h1Style = {
    color: 'rgb(255, 255, 255)',
    letterSpacing: '0px',
    fontWeight: '600',
    transition: 'none',
    lineHeight: '70px',
    borderWidth: '0px',
    margin: '125px auto 0 0',
    padding: '0px',
    fontSize: '42px',
    display: 'inline-block'
  }

  const overlayStyle = {
    width: '100%',
    height: '100%',
    backgroundColor:'#000',
    opacity: '0.3',
    position: 'absolute'
  } 

  return(
    <div  style={ headerStyle } >
      <div style={ overlayStyle }></div>
      <div style={ contentStyle }>
        <h1 style={ h1Style } >{ title }</h1>
      </div>
    </div>
  )
}