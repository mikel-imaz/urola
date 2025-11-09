---
icon: material/map-outline
---

# :material-map-outline: &nbsp; Mapas

## :material-map-marker: &nbsp; Lugares

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
    { name: "Bocamina", address: "Mina de lignito Sin Nombre", coords: [43.24122523019918, -2.2383105208115057] },
    { name: "Recta", address: "Tramo largo de túneles y puentes", coords: [43.141464368796534, -2.3487246281929615] },
    { name: "Túnel", address: "En curva", coords: [43.14910961249978, -2.342144625797001] },
    { name: "Barrera", address: "Puerta envallada del ferrocarril de Patricio", coords: [43.06012407176739, -2.3322551730976193] },
    { name: "Cueva", address: "Balezulo", coords: [43.29975772059388, -2.2644531142377136] },
    { name: "Roca", address: "Afloramiento volcánico", coords: [43.10283720454385, -2.3172006958871574] },
    { name: "Instalación", address: "Obra artística de Luis Lazkano", coords: [43.26418215585415, -2.2548273256682925] },
    { name: "Poza", address: "En una regata del Urola", coords: [42.98651138031321, -2.332024326276975] },
    { name: "Patio", address: "De la papelera sobre el Urola", coords: [43.05278250397673, -2.330202591888874] },
    { name: "Puente", address: "Medieval de Amu", coords: [43.181032283934115, -2.2600208354460793] },
    { name: "Casa", address: "Altuna-Portu", coords: [43.1764079584984, -2.3147560308004693] },
    { name: "Presa", address: "Ferrería de Lili", coords: [43.236261332761444, -2.267395233139627] },
    { name: "Caseta", address: "Seccionador castillo medieval", coords: [43.21939002256641, -2.255947087444832] },
    { name: "Trenes", address: "Abandonados en la selva", coords: [43.28285644576993, -2.264559480847184] },
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


## :material-fountain-pen-tip: &nbsp; Citas

<div id="map_citas" style="height: 400px;"></div>

<script>
  // Initialize map centered on your area
  var map = L.map('map_citas').setView([43.16565732830929, -2.274142884298308], 10);

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
    { name: "Pío Baroja", address: "«Este trozo de camino, desde Iraeta a Cestona, pasa entre dos montes y tiene en el fondo el río. De noche, sobre todo, el tal paraje es triste y siniestro» → Zalacaín el aventurero (1909)", coords: [43.247067267787806, -2.2598909578962263] },
    { name: "san Ignacio", address: "«[...] le pregunté al Peregrino cómo había hecho los Ejercicios. Él me dijo que no los había hecho todos de una vez, sino que todo aquello que observaba en su alma y encontraba útil, le parecía que podría ser útil a los demás; y así lo ponía por escrito. [...] el sistema de hacer elección me dijo que lo había sacado de aquella variedad de espíritu y pensamientos que tenía cuando en Loyola aún convalecía de las heridas de la pierna» → Autobiografía (1555)", coords: [43.17410491225235, -2.2823658202982315] },
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