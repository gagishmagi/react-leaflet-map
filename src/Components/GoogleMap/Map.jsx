import React from 'react'
import { compose, withProps } from "recompose"
import { GoogleMap,withGoogleMap, withScriptjs, Marker } from 'react-google-maps'


// const MyGoogleMaps = withScriptjs(
//     withGoogleMap(
//             <GoogleMap
//                 defaultCenter={{lat: 31.2614223,lng: 34.7208468}}
//                 defaultZoom={12}
//             ></GoogleMap>
//     )
// )


const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />

    </GoogleMap>
  );


export default function MyMap() {
    
    return (
        <div>
                
            <MyMapComponent />

        </div>
    )
}
