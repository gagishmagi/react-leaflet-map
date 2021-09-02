import { Icon } from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import markerIconPng2 from "leaflet/dist/images/marker-icon-2x.png"

import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


export default function Map() {
    const position = [31.2614223,34.7208468]
    return (
        <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={new Icon({iconUrl:markerIconPng, iconSize:[25, 41] ,iconAnchor: [12, 0]})}>
            <Popup>
              <img src={markerIconPng2} />
              <h1>Our address is at:</h1>
              <p>Beer Sheva...</p>
            </Popup>
          </Marker>
          
        </MapContainer>
    )
}
