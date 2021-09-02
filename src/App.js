import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import axios from 'axios'
import { useState } from 'react';

function App() {

  let data = {
    email: '',
    name: '',
    subject: '',
    description: ''
  }

  const [inputs, setInputs] = useState(data)

  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev,[name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const {email, name, subject, description} = inputs

    // console.log("handled")

    axios.post('http://localhost:5000/mail/sendMailFromClient', {
      from: email,
      subject,
      name,
      text:description
    })

  }

  return (
    <div className="App">
      <h1>Contact us</h1>
      <header className="App-header">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" name="email" value={inputs.email} onChange={handleChange} />
        <br />
        <input type="text" placeholder="name" name="name" value={inputs.name} onChange={handleChange} />
        <br />
        <input type="text" placeholder="subject" name="subject" value={inputs.subject} onChange={handleChange} />
        <br />
        <textarea name="description" placeholder="tell us about your experience" value={inputs.description} onChange={handleChange} cols="30" rows="10"></textarea>
        <br />
        <button>submit</button>
      </form>

        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </header>
    </div>
  );
}

export default App;
