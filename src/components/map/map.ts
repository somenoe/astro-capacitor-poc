import { Geolocation } from "@capacitor/geolocation";
import L from "leaflet";

function insertMap(latitude: number, longitude: number) {
  const tiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution =
    "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";

  const map = L.map("user-map");
  map.setView([latitude, longitude], 13);

  L.tileLayer(tiles!, {
    attribution: attribution,
  }).addTo(map);

  const iconWidth = 269;
  const iconHeight = 384;
  const reducedFactor = 8;

  const pinIcon = L.icon({
    iconUrl: "pin.png",

    iconSize: [iconWidth / reducedFactor, iconHeight / reducedFactor],
    iconAnchor: [iconWidth / reducedFactor / 2, iconHeight / reducedFactor],
    popupAnchor: [0, -(iconHeight / reducedFactor + 3)],
  });
  L.marker([latitude, longitude], { icon: pinIcon })
    .addTo(map)
    .bindPopup("You are here!");
}

const getCurrentPosition = async () => {
  try {
    const coordinates = await Geolocation.getCurrentPosition();

    const latitude = document.getElementById("latitude") as HTMLSpanElement;
    const longitude = document.getElementById("longitude") as HTMLSpanElement;

    latitude.innerText = coordinates.coords.latitude.toString();
    longitude.innerText = coordinates.coords.longitude.toString();

    insertMap(coordinates.coords.latitude, coordinates.coords.longitude);
  } catch (error) {
    const currentMap = document.getElementById("current-map") as HTMLDivElement;
    currentMap.innerHTML = "⚠️ cannot get current position";
    currentMap.classList.add("text-red-500");

    console.error(error);
  }
};

getCurrentPosition();
