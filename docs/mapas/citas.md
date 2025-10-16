---
icon: material/fountain-pen-tip
---

# :material-fountain-pen-tip: &nbsp; Citas

Escritores viajeros y el valle.

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
    { name: "Benito Pérez Galdós", address: "«Parte de aquella multitud se apearía en Zumárraga para invadir los balnearios de moda» → La de los tristes destinos (1907)", coords: [43.087097893280294, -2.319964744165505] },
    { name: "Miguel de Unamuno", address: "«Por allá abajo, por el fondo, se veía un trozo de vía férrea entre dos túneles. Y vimos pasar un tren, un tren ridículo, que parecía de juguete; un par de cajoncitos en que iban encerrados unos cuantos hombres. Luego supimos, al bajar, que en aquel tren había pasado a nuestros pies su majestad el rey de España» → Por tierras de Portugal y España (1911)", coords: [42.95223438878335, -2.325258462765168] },
    { name: "Gustavo Adolfo Bécquer", address: "«Ya no hay Pirineos. Ya no hay Alpes tampoco. España, Francia e Italia, los tres grandes pueblos latinos, se dan la mano a través de las cordilleras de montes que los dividían» → El contemporáneo (1864)", coords: [42.976312614753, -2.313627369957654] },
    { name: "Pierre Loti", address: "«Esta mañana es la voz de una sirvienta de la fonda la que me despierta, cantando en la escalera un aire vasco a cinco tiempos, un aire de este Iparragirre cuya estatua vi ayer en Zumarraga, en la pequeña plaza triste» → Figures et Choses qui passaient (1898)", coords: [43.093364522622394, -2.3140630597435274] },
    { name: "Richard Ford", address: "«At Zumaya we cross the excellent salmon and trout stream Urola» → A Handbook for Travellers in Spain (1845)", coords: [43.29442841875753, -2.2517185858596065] },
    { name: "Azorín", address: "«A un lado, a la izquierda, se yergue una empinada ladera exornada de robles y castaños; a otro lado, a la derecha, un río pasa manso, verdoso, entre boscaje lujuriante. Y veis, allá en la ingente lejanía, colgadas, agarradas a la tierra, casitas blancas, con la techumbre roja, que se os antoja que van a comenzar a rodar por las laderas» → Veraneo sentimental (1904)", coords: [43.124476118971806, -2.3481776862020096] },
    { name: "Jovellanos", address: "«[...] y en un corralillo, otra fuente con dos caños, que caen en dos alberquitas hondas, formadas de pizarras, que son los baños, al raso; todo ruin; el agua no llega al grado de tibia, sino como caldeada al sol» → (1797)", coords: [43.23187271723896, -2.2581062183982805] },
    { name: "Pío Baroja", address: "«Cuando cierro los ojos, todavía me represento el caserío del pueblo desde el otro lado del río Urola» → Autobiografía (1944)", coords: [43.237906624043625, -2.2581201319589304] },
    { name: "Rousseau", address: "«Nos unimos tan bien, que formamos el proyecto de pasar nuestros días juntos. Debía yo, dentro de algunos años, ir a Azcoitia para vivir con él en su tierra» → Las confesiones (1782)", coords: [43.176444165584535, -2.3147721530180294] },
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