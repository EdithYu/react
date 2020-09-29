import React from 'react'
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap'

const BMap = function () {
  return (
    <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom='11'>
      <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
      <NavigationControl />
      <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text='' />
    </Map>
  )
}

export default BMap
