"use strict";

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

// ---

componentDidMount() {
  var map = L.map("map-container", {
    zoomControl: false
  }).setView([47.622868, -122.336553], 17);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
  }).addTo(map);

  var posIcon = L.icon({
    iconUrl: "images/icon-location.svg",
    iconSize: [44, 55],
    iconAnchor: [22, 56]
  });

  L.marker([47.622868, -122.336553], {
    icon: posIcon
  }).addTo(map);
}

// ---

  render() {
    return (
      <div id="map-container"></div>
    );
  }
}
