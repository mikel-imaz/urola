---
icon: material/bookshelf
---

# :material-bookshelf: &nbsp; Librerías

Librerías en las que se puede comprar el libro:

<div id="map" style="height: 400px;"></div>

<script>
  // Initialize map centered on your area
  var map = L.map('map').setView([43.08979662484121, -2.3163293251120227], 15);

  // Add base tiles (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add markers for each shop
  var sites = [
    { name: "Librería Legazpi", address: "Soraluze 4, Zumarraga", coords: [43.09076646470659, -2.3140156339150932] },
    { name: "Librería Urki", address: "Secundino Esnaola 3, Zumarraga", coords: [43.088030455030015, -2.3199658610375185] },
    { name: "Librería Aresti", address: "Labeaga 41, Urretxu", coords: [43.08928798995817, -2.319368241611099] }
  ];

  sites.forEach(site => {
    L.marker(site.coords)
      .addTo(map)
      .bindPopup(`<b>${site.name}</b><br>${site.address}`)
      .bindTooltip(site.name, { 
       permanent: true, 
       direction: 'right',   // can be 'top', 'bottom', 'left', 'right', or 'auto'
       offset: [5, 0],       // slight horizontal offset
       opacity: 0.8          // optional, to make it less intrusive
      });
  });
</script>

__Librería Legazpi__  
Soraluze 4, Zumarraga

__Librería Urki__  
Secundino Esnaola 3, Zumarraga

__Librería Aresti__  
Labeaga 41, Urretxu
