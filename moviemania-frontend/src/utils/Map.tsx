import { MapContainer, TileLayer, useMap, useMapEvent, Marker } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import 'leaflet/dist/leaflet.css';
import coordinateDTO from "./coordinates.model";
import { useState } from "react";

// Setting up the default icon for Leaflet
let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates);
    return (
        <MapContainer 
            center={[53.48641571170385, -113.51667530518222]} 
            zoom={13} 
            style={{ height: props.height }}
        >
            <TileLayer 
                attribution="React Movies" 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClick setCoordinates={coordindates => {
                setCoordinates([coordindates]);
                props.handleMapClick(coordindates);
            }} />
            {coordinates.map((coordinate, index) => <Marker key={index}
                position = {[coordinate.lat, coordinate.lng]}/>) }
        </MapContainer>
    );
}

interface mapProps {
    height: string;
    coordinates: coordinateDTO[];
    handleMapClick(coordinates: coordinateDTO): void;
}

Map.defaultProps = {
    height: '500px'
};

function MapClick(props: mapClickProps) {
    useMapEvent('click', (e) => {
        props.setCoordinates({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
    return null;    
}

interface mapClickProps {
    setCoordinates(coordinates: coordinateDTO): void;
}


