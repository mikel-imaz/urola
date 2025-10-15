---
icon: material/map-marker
---

# :material-map-marker: &nbsp; Lugares

Lugares singulares.

<div id="map" style="height: 400px;"></div>

<script>
  // Initialize map centered on your area
  var map = L.map('map').setView([43.16565732830929, -2.274142884298308], 10);

  // Add base tiles (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add markers for each shop
  var sites = [
    { name: "Manantial", address: "Nacedero del Urola", coords: [42.9779253, -2.3396750] },
    { name: "Pozo", address: "Excavación nº5 del túnel de Oazurza", coords: [42.98462521497178, -2.318074763432768] },
    { name: "Túmulo", address: "Cantera Harrobizabal", coords: [42.999534, -2.320591] },
    { name: "Mojón", address: "Sel de Jarondo", coords: [42.9938508160, -2.3675153130] },
    { name: "Mina", address: "Mina de lignito Sin Nombre", coords: [43.24122523019918, -2.2383105208115057] },
    { name: "Recta", address: "Tramo largo de túneles y puentes", coords: [43.141464368796534, -2.3487246281929615] },
    { name: "Túnel", address: "En curva", coords: [43.14910961249978, -2.342144625797001] },
    { name: "Barrera", address: "Puerta envallada del ferrocarril de Patricio", coords: [43.06012407176739, -2.3322551730976193] },
    { name: "Cueva", address: "Balezulo", coords: [43.29975772059388, -2.2644531142377136] },
    { name: "Roca", address: "Afloramiento volcánico", coords: [43.10283720454385, -2.3172006958871574] },
    { name: "Landart", address: "Obra artística de Luis Lazkano", coords: [43.26418215585415, -2.2548273256682925] },
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