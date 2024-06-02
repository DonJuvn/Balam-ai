import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ center, zoom, locations }) => {
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB9nF4kgBh6Cr0q7YuTrK6SIiwO9JvCUGg' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {locations.map((location, index) => (
                    <Marker key={index} lat={location.lat} lng={location.lng} text={location.text} />
                ))}
            </GoogleMapReact>
        </div>
    );
};

const Marker = ({ text }) => <div>{text}</div>;

export default GoogleMap;
