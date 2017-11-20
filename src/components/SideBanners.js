import React, {Component} from 'react'
import config from '../config/'
import {
  Link
} from 'react-router-dom'
import styled from 'styled-components'

export default function SideBanners ({banners, showBanners}) {
  if(!showBanners || banners.length <= 0) {
    return null
  }
  console.log(banners)
  return (
    <div>
    {
      banners.map((item) => (
        <a key={item._id} href={ item.link } target={ item.target } >
          <img key={item.id} src={ item.src } style={ { marginBottom:'10px', width:'100%'} } /> 
        </a>
      ))
    }
    </div>
  )
}