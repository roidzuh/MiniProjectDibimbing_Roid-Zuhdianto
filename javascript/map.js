// Inisialisasi peta
const mymap = L.map("map").setView([51.505, -0.09], 13);

// Tambahkan layer peta dari OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(mymap);

// Tambahkan marker ke peta
const marker = L.marker([-7.2574719, 112.7520883]).addTo(mymap);
marker.bindPopup("<b>Posisi</b><br>Rumah").openPopup();
