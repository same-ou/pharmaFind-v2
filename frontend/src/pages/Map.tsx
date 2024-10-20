'use client';

import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map() {
    const markers = [
    {
      id: 1,
      name: 'Marker 1',
      position: [51.505, -0.09]
    },
    {
      id: 2,
      name: 'Marker 2',
      position: [51.515, -0.1]
    },
    {
      id: 3,
      name: 'Marker 3',
      position: [51.525, -0.11]
    }
    ]
    const handleMarkerClick = (marker, event) => {
        console.log("Marker clicked!", event.latlng);
        console.log("Marker clicked!", marker);
        // Perform your custom action here
      };
  return (
    <div className='w-full h-[100%] relat'>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='h-[600px] z-0'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {markers.map(marker => (
      <Marker key={marker.id} 
      position={marker.position as LatLngExpression}
      eventHandlers={{
        click: (event) => handleMarkerClick(marker, event),
          
      }}
      >
        <Popup>{marker.name}</Popup>
      </Marker>
    ))}
  </MapContainer>
  </div>
  )
}

export default Map