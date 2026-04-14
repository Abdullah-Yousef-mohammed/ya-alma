"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's default icon path issues in Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapProps {
  locationName: string;
  stateCode: string;
}

export default function InteractiveCampusMap({ locationName, stateCode }: MapProps) {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

  useEffect(() => {
    // Attempt Geocoding. Fallback to Kuala Lumpur if fails.
    const geocode = async () => {
      try {
        const query = encodeURIComponent(`${locationName}, ${stateCode}, Malaysia`);
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
        const data = await res.json();
        
        if (data && data.length > 0) {
          setCoordinates([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        } else {
          // Fallback to general KL area
          setCoordinates([3.1390, 101.6869]);
        }
      } catch (err) {
        setCoordinates([3.1390, 101.6869]);
      }
    };
    
    geocode();
  }, [locationName, stateCode]);

  if (!coordinates) return <div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-2xl"></div>;

  return (
    <div className="w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
      <MapContainer 
        center={coordinates} 
        zoom={13} 
        scrollWheelZoom={false} 
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={customIcon}>
          <Popup>
            <div className="font-bold text-gray-800 dark:text-gray-200">{locationName}</div>
            <div className="text-sm text-gray-500">{stateCode}, Malaysia</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
