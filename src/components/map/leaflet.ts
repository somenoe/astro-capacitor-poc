import L from "leaflet";

class LeafletMap extends HTMLElement {
  constructor() {
    super();

    const latlng: [number, number] = [
      Number(this.dataset.latitude),
      Number(this.dataset.longitude),
    ];

    var map = L.map(this.dataset.container!).setView(
      latlng,
      Number(this.dataset.zoom)
    );
    L.tileLayer(this.dataset.tiles!, {
      attribution: this.dataset.attribution,
    }).addTo(map);

    const iconWidth = 269;
    const iconHeight = 384;
    const reducedFactor = 8;

    // src: https://leafletjs.com/examples/custom-icons/
    const pinIcon = L.icon({
      iconUrl: "pin.png",

      iconSize: [iconWidth / reducedFactor, iconHeight / reducedFactor],
      iconAnchor: [iconWidth / reducedFactor / 2, iconHeight / reducedFactor],
      popupAnchor: [0, -(iconHeight / reducedFactor + 3)],
    });

    if (this.dataset.locations) {
      const locations = JSON.parse(this.dataset.locations);
      for (var i = 0; i < locations.length; i++) {
        L.marker([locations[i][1], locations[i][2]], { icon: pinIcon })
          .addTo(map)
          .bindPopup(locations[i][0]);
      }
    }
  }
}

customElements.define("leaflet-map", LeafletMap);
