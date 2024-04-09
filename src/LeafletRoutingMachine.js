
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = () => {
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: "/marche.gif",
    iconSize: [90, 90],
  });
  useEffect(() => {
    var marker1 = L.marker([28.4731, 77.4829], { icon: DefaultIcon }).addTo(
      map
    );
    L.Routing.control({
     
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim(),
      addWaypoints: true,
      showAlternatives: true,


  }).addTo(map);
  
  }, []);
  return ;
};

export default LeafletRoutingMachine;